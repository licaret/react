import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialTasks = [{ id: nanoid(), text: "Feed the Dog", done: true }];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addTask(state, action) {
      return [
        ...state,
        {
          id: nanoid(),
          text: action.payload.text,
          done: false,
        },
      ];
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload.id);
    }
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
