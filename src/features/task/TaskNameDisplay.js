import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editedTask } from './taskSlice'

export function TaskNameDisplay({ task, k }) {
    const [inputValue, setInputValue] = useState(task.description)
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()

    const finishedEditing = () => {
        setIsEditing(false)
        if (inputValue) {
            dispatch(editedTask({
                k,
                type: task.type,
                newDescription: inputValue
            }))
        }
    }

    return(
        <>
        {
            !isEditing ? (
                <p 
                onClick={() => setIsEditing(true)}
                    style={{
                        textDecoration: task.checked ? 'line-through' : 'none',
                        color: task.checked ? 'gray' : 'black',
                        cursor: 'pointer'
                    }}
                >
                        {task.description}
                </p>
            ) : (
                <input 
                    type="text" 
                    maxLength="30"
                    autoFocus
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onBlur={finishedEditing}
                />
            )
        }
        </>
    )
    

}