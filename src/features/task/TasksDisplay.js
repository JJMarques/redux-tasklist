import styles from './TasksDisplay.module.css'

export function TasksDisplay({ type }){

    const color = {
        borderTop: `5px solid ${type === 'important' ? 'rgb(255, 77, 77)' : type === 'small' ? 'rgb(71, 184, 77)' : 'rgb(71, 111, 184)'}`,
        color: type === 'important' ? 'rgb(255, 77, 77)' : type === 'small' ? 'rgb(71, 184, 77)' : 'rgb(71, 111, 184)' 
    }

    return(
        <div style={color} className={styles.TasksDisplay}>
            <h2>{type} tasks</h2>
            <div className={styles.taskContainer}>
                <p>dsadasdasdsadsaddsadasda</p>
            </div>
            <div className={styles.taskContainer}>
                <p>dsadasdasdsadsaddsadasda</p>
            </div>
        </div>
    )
}