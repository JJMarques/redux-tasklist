import { AiOutlineDelete } from 'react-icons/ai';
import styles from './TasksDisplay.module.css';
import { useEffect, useState } from 'react';
import { deleteTask, finishedTask } from './taskSlice';
import { useDispatch } from 'react-redux';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { TaskNameDisplay } from './TaskNameDisplay';

export function TaskItem({ task, k }) {
    const [timeAgo, setTimeAgo] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        const taskDate = new Date(task.date);
        setTimeAgo(`${formatDistanceToNow(taskDate)} ago`);
    }, [task.date]);

    return (
        <div className={styles.taskContainer} key={task.date}>
            <small style={{ color: '#4f4f4f' }}>{timeAgo}</small>
            <div className={styles.taskGroup}>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() =>
                                dispatch(finishedTask({ type: task.type, k }))
                            }
                            disabled={task.checked === true}
                            checked={task.checked === true}
                        />
                    </label>
                </div>
                <TaskNameDisplay task={task} k={k} />
                <button
                    className={styles.deleteButton}
                    onClick={() => dispatch(deleteTask({ type: task.type, k }))}
                >
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
}
