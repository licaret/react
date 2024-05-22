import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import { useDispatch } from "react-redux";
import { addTask, deleteTask } from "../../slices/tasksSlice";

function TasksApp() {
  const dispatch = useDispatch();

  const handleAddTask = (taskName) => {
    dispatch(
      addTask({
        text: taskName,
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    dispatch(
      deleteTask({
        id: taskId,
      })
    );
  };

  return (
    <>
      <h2>List</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default TasksApp;
