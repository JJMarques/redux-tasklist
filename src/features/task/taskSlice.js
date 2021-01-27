import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    importantTasks: JSON.parse(localStorage.getItem('importantTasks')) || [],
    smallTasks: JSON.parse(localStorage.getItem('smallTasks')) || [],
    regularTasks: JSON.parse(localStorage.getItem('regularTasks')) || []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        insertTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks.push(action.payload);
                    localStorage.setItem('importantTasks', JSON.stringify(state.importantTasks))
                    break
                case 'regular':
                    state.regularTasks.push(action.payload);  
                    localStorage.setItem('regularTasks', JSON.stringify(state.regularTasks)) 
                    break
                case 'small':
                    state.smallTasks.push(action.payload); 
                    localStorage.setItem('smallTasks', JSON.stringify(state.smallTasks))  
                    break 
                default: return state      
            }
        },
        deleteTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks.splice(action.payload.k, 1)
                    localStorage.setItem('importantTasks', JSON.stringify(state.importantTasks))
                    break
                case 'regular':
                    state.regularTasks.splice(action.payload.k, 1) 
                    localStorage.setItem('regularTasks', JSON.stringify(state.regularTasks))  
                    break
                case 'small':
                    state.smallTasks.splice(action.payload.k, 1) 
                    localStorage.setItem('smallTasks', JSON.stringify(state.smallTasks))  
                    break 
                default: return state      
            }
        },
        editedTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks[action.payload.k].description = 
                    action.payload.newDescription
                    localStorage.setItem('importantTasks', JSON.stringify(state.importantTasks))  
                    break
                case 'regular':
                    state.regularTasks[action.payload.k].description = 
                    action.payload.newDescription 
                    localStorage.setItem('regularTasks', JSON.stringify(state.regularTasks))
                    break
                    case 'small':
                    state.smallTasks[action.payload.k].description = 
                    action.payload.newDescription   
                    localStorage.setItem('smallTasks', JSON.stringify(state.smallTasks))
                    break 
                default: return state      
            }
        },
        finishedTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks[action.payload.k].checked = true
                    localStorage.setItem('importantTasks', JSON.stringify(state.importantTasks))
                    break
                case 'regular':
                    state.regularTasks[action.payload.k].checked = true
                    localStorage.setItem('regularTasks', JSON.stringify(state.regularTasks))
                    break   
                case 'small':
                    state.smallTasks[action.payload.k].checked = true
                    localStorage.setItem('smallTasks', JSON.stringify(state.smallTasks))
                    break 
                default: return state      
            }
        }
    }
})

export const { insertTask, deleteTask, editedTask, finishedTask } = taskSlice.actions;

export const selectTasks = state => state

export default taskSlice.reducer;