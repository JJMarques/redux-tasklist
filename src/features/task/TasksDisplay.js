import styles from './TasksDisplay.module.css'
import { useSelector } from 'react-redux'
import { selectTasks } from './taskSlice'
import { TaskItem } from './TaskItem'

import { AiOutlineWarning, AiOutlineClockCircle } from 'react-icons/ai'

export function TasksDisplay({ type }){

    const { task } = useSelector(selectTasks)
    let tasksList, taskIcon
    if (type === 'important') {
        tasksList = task.importantTasks.map((t, k) => (
            <TaskItem task={t} k={k} key={k} />
        ))
        taskIcon = <AiOutlineWarning style={{ marginRight: '10px' }}/>
    } else if (type === 'small') {
        tasksList = task.smallTasks.map((t, k) => (
            <TaskItem task={t} k={k} key={k} />
        ))
        taskIcon = <AiOutlineClockCircle style={{ marginRight: '10px' }} />
    } else if (type === 'regular') {
        tasksList = task.regularTasks.map((t, k) => (
            <TaskItem task={t} k={k} key={k} />
        ))
    }

    const color = {
        borderTop: `4px solid ${type === 'important' ? '#e82a2a' : type === 'small' ? '#3d9126' : 'rgb(71, 111, 184)'}`,
        color: type === 'important' ? '#e82a2a' : type === 'small' ? '#3d9126' : 'rgb(71, 111, 184)' 
    }

    return(
        <div style={color} className={styles.TasksDisplay}>
            <h2>{taskIcon}{type} tasks</h2>
            {tasksList}
        </div>
    )
}