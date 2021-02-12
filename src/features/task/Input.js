import { useState } from 'react';
import styles from './Input.module.css';
import { useDispatch } from 'react-redux';
import { insertTask } from './taskSlice';

export function Input() {
    const [taskInput, setTaskInput] = useState('');
    const [taskType, setTaskType] = useState('regular');

    const dispatch = useDispatch();

    const sumbitTask = (event) => {
        event.preventDefault();

        if (taskInput) {
            dispatch(
                insertTask({
                    type: taskType,
                    date: String(new Date()),
                    description: taskInput,
                    checked: false,
                })
            );
        }
        setTaskInput('');
    };

    return (
        <div className={styles.inputContainer}>
            <form onSubmit={sumbitTask}>
                <label className={styles.inputLabel}>
                    Insert a task below ✏️
                    <input
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder="Walk the dog."
                        autoFocus
                        maxLength="30"
                    />
                </label>
                <div className={styles.selectTaskType}>
                    <label>
                        <input
                            type="radio"
                            value="important"
                            checked={taskType === 'important'}
                            onChange={(e) => setTaskType(e.target.value)}
                        />
                        Important
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="regular"
                            checked={taskType === 'regular'}
                            onChange={(e) => setTaskType(e.target.value)}
                        />
                        Regular
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="small"
                            checked={taskType === 'small'}
                            onChange={(e) => setTaskType(e.target.value)}
                        />
                        Small
                    </label>
                </div>
                <button type="submit">Submit task</button>
            </form>
        </div>
    );
}
