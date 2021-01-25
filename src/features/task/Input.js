import { useState } from 'react'
import styles from './Input.module.css'

import { useSelector } from 'react-redux'
import { selectTasks } from './taskSlice'


export function Input() {
    const [taskInput, setTaskInput] = useState('')
    const [taskType, setTaskType] = useState('regular')
    /* const { task } = useSelector(selectTasks)
    console.log(task) */

    const sumbitTask = event => {
        event.preventDefault()

        console.log(taskInput);
    }

    return(
        <div className={styles.inputContainer}>
            <h1>Insert a task below</h1>
            <form onSubmit={sumbitTask}>
                <input 
                    type="text"
                    value={taskInput} 
                    onChange={e => setTaskInput(e.target.value)}
                    autoFocus
                />
                <div className={styles.selectTaskType}>
                    <label>
                        <input
                        type="radio"
                        value="important"
                        checked={taskType === "important"}
                        onChange={e => setTaskType(e.target.value)}
                        />
                        Important
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="regular"
                        checked={taskType === "regular"}
                        onChange={e => setTaskType(e.target.value)}
                        />
                        Regular
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="small"
                        checked={taskType === "small"}
                        onChange={e => setTaskType(e.target.value)}
                        />
                        Small
                    </label>
                </div>
                <button type="submit">
                    Submit task
                </button>
            </form>
        </div>
    )
}