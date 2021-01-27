import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    importantTasks: [],
    smallTasks: [],
    regularTasks: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        insertTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks.push(action.payload);
                    break
                case 'regular':
                    state.regularTasks.push(action.payload);   
                    break
                case 'small':
                    state.smallTasks.push(action.payload);   
                    break 
                default: return state      
            }
        },
        deleteTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks.splice(action.payload.k, 1)
                    break
                case 'regular':
                    state.regularTasks.splice(action.payload.k, 1)   
                    break
                case 'small':
                    state.smallTasks.splice(action.payload.k, 1)   
                    break 
                default: return state      
            }
        },
        finishedTask: (state, action) => {
            switch (action.payload.type) {
                case 'important':
                    state.importantTasks[action.payload.k].checked = true
                    break
                case 'regular':
                    state.regularTasks[action.payload.k].checked = true
                    break   
                case 'small':
                    state.smallTasks[action.payload.k].checked = true
                    break 
                default: return state      
            }
        }
    }
})

export const { insertTask, deleteTask, finishedTask } = taskSlice.actions;

export const selectTasks = state => state

export default taskSlice.reducer;