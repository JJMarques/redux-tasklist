import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    importantTasks: [],
    smallTasks: [],
    regularTaks: []
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
                    state.regularTaks.push(action.payload);   
                    break
                case 'small':
                    state.smallTasks.push(action.payload);   
                    break 
                default: return state      
            }
        }
    }
})

export const { insertTask } = taskSlice.actions;

export const selectTasks = state => state

export default taskSlice.reducer;