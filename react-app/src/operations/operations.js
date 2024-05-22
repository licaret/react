import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3000/tasks`);
      return await res.json();
    }
    catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
