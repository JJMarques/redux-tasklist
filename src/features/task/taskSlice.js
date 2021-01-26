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
            console.log(action.payload.task);
            switch (action.payload.type) {
                case 'important':
                    /* state.importantTasks.push(action.payload); */
                    break
                case 'regular':
                    /* state.regularTasks.push(action.payload); */   
                    break
                case 'small':
                    /* state.smallTasks.push(action.payload); */   
                    break 
                default: return state      
            }
        }
    }
})

export const { insertTask, deleteTask } = taskSlice.actions;

export const selectTasks = state => state

export default taskSlice.reducer;