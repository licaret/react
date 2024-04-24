import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleAddButton = () => {
    onAddTask(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddButton}>Add</button>
    </>
  );
}

export default AddTask;
