import { nanoid } from "nanoid";
import { ADD_TASK, REMOVE_TASK } from "../actions/actionTypes";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case ADD_TASK: {
      return [...tasks, {
        id: nanoid(),
        text: action.payload.text,
        done: false
      }];
    }
    case REMOVE_TASK: {
      return tasks.filter(task => task.id !== action.payload.id);
    }
    default: {
      throw new Error(`Unknown action ${action.type}`);
    }
  }
}

export default tasksReducer;