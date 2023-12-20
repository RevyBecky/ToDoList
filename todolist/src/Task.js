import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <p>{task.text}</p>
      <p>DateTime: {task.dateTime}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
