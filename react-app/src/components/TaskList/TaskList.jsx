import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

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

function TaskList({ tasks, onDeleteTask }) {
  const [localTasks, setLocalTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks`)
      .then(res => res.json())
      .then(data => setLocalTasks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {localTasks.map((task) => (
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
