import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchTasks } from "../operations/operations.js";

const initialTasks = [{ id: nanoid(), text: "Feed the Dog", done: true }];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: initialTasks,
    isLoading: true,
    error: null
  },
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
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
