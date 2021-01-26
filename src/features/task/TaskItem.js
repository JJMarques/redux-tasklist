import { AiOutlineDelete } from 'react-icons/ai'
import styles from './TasksDisplay.module.css'

import { deleteTask } from './taskSlice'
import { useDispatch } from 'react-redux'

export function TaskItem({ task }) {
    const dispatch = useDispatch()

    return(
        <div className={styles.taskContainer} key={task.date}>
            <div>
                <input type="checkbox" />
                <p>{task.description}</p>
            </div>
            <div 
                className={styles.deleteButton}
                onClick={() => dispatch(deleteTask({
                    task
                }))}
            >
                <AiOutlineDelete />
            </div>
        </div>
    )
}