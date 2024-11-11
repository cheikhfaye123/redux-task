
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: Date.now(), text: action.payload });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const { addTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
