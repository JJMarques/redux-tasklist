import styles from './TasksDisplay.module.css'
import { useSelector } from 'react-redux'
import { selectTasks } from './taskSlice'
import { TaskItem } from './TaskItem'

export function TasksDisplay({ type }){

    const { task } = useSelector(selectTasks)
    let tasksList
    if (type === 'important') {
        tasksList = task.importantTasks.map((t, k) => (
            <TaskItem task={t} k={k} key={k} />
        ))
    } else if (type === 'small') {
        tasksList = task.smallTasks.map((t, k) => (
            <TaskItem task={t} k={k} key={k} />
        ))
    } else if (type === 'regular') {
        tasksList = task.regularTasks.map((t, k) => (
            <TaskItem task={t} k={k} key={k} />
        ))
    }

    const color = {
        borderTop: `4px solid ${type === 'important' ? 'rgb(255, 77, 77)' : type === 'small' ? 'rgb(71, 184, 77)' : 'rgb(71, 111, 184)'}`,
        color: type === 'important' ? 'rgb(255, 77, 77)' : type === 'small' ? 'rgb(71, 184, 77)' : 'rgb(71, 111, 184)' 
    }

    return(
        <div style={color} className={styles.TasksDisplay}>
            <h2>{type} tasks</h2>
            {tasksList}
        </div>
    )
}