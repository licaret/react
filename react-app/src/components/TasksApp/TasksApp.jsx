import React, { useReducer } from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import { nanoid } from "nanoid";
import tasksReducer from "../../reducers/tasksReducer";
import { ADD_TASK, REMOVE_TASK } from "../../actions/actionTypes";

const initialTasks = [{ id: nanoid(), text: "Feed the Dog", done: true }];

function TasksApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (taskName) => {
    const action = {
      type: ADD_TASK,
      payload: {
        text: taskName,
      },
    };
    dispatch(action);
  };

  const handleDeleteTask = (taskId) => {
    const action = {
      type: REMOVE_TASK,
      payload: {
        id: taskId,
      },
    };
    dispatch(action);
  };

  return (
    <>
      <h2>List</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default TasksApp;
