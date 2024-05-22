import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../operations/operations.js";

function Task({ task, onDelete }) {
  const handleDeleteButton = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={task.done} />
        {task.text}
        <button onClick={handleDeleteButton}>Delete</button>
      </label>
    </div>
  );
}

function TaskList({ onDeleteTask }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.errors);
  const items = useSelector((state) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {items.map((task) => (
        <div key={task.id}>
          <Task task={task} onDelete={onDeleteTask} />
        </div>
      ))}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
};

export default TaskList;
