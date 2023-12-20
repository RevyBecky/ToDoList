import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const initialTasks = [
      { id: 1, text: 'Task 1', dateTime: new Date().toLocaleString() },
      { id: 2, text: 'Task 2', dateTime: new Date().toLocaleString() },
      { id: 3, text: 'Task 3', dateTime: new Date().toLocaleString() },
    ];
    setTasks(initialTasks);
  }, []);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: `New task ${tasks.length + 1}`,
      dateTime: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };


  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <button onClick={addTask}>Add task</button>
      <TaskList tasks={tasks} onDelete={deleteTask} onSave={updateTask} />
    </div>
  );
};

export default App;
