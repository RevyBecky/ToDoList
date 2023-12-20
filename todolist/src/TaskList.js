import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onSave }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onSave={onSave} />
      ))}
    </div>
  );
};

export default TaskList;
