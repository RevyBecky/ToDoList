import React, { useState } from 'react';

const Task = ({ task, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask = { ...task, text: editedText };
    setIsEditing(false);
    onSave(updatedTask);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(task.text);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <input type="text" value={editedText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{task.text}</p>
          <p>DateTime: {task.dateTime}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
