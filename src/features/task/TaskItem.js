import { AiOutlineDelete } from 'react-icons/ai'
import styles from './TasksDisplay.module.css'

import { deleteTask, finishedTask } from './taskSlice'
import { useDispatch } from 'react-redux'

export function TaskItem({ task, k }) {
    const dispatch = useDispatch()

    return(
        <div className={styles.taskContainer} key={task.date}>
            <div>
                <input 
                    type="checkbox" 
                    onChange={() => dispatch(finishedTask({ type: task.type, k }))}
                    disabled={task.checked === true}
                />
                <p 
                    style={{
                        textDecoration: task.checked ? 'line-through' : 'none',
                        color: task.checked ? 'gray' : 'black'
                    }}
                >
                        {task.description}
                </p>
            </div>
            <div 
                className={styles.deleteButton}
                onClick={() => dispatch(deleteTask({ type: task.type, k }))}
            >
                <AiOutlineDelete />
            </div>
        </div>
    )
}