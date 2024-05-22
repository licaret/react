import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../../slices/tasksSlice";

function TasksApp() {
  const tasks = useSelector((state) => state.tasks);
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
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default TasksApp;
