import React from "react";

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
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} onDelete={onDeleteTask} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
