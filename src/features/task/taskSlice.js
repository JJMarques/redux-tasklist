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

    }
})

export const selectTasks = state => state

export default taskSlice.reducer;