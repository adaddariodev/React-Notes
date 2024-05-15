import React, { useState } from 'react';
import CreateTask from './components/CreateTask';
import TasksList from './components/TasksList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Applicazione di Gestione Task</h1>
      <br />
      {/* Create */}
      <h3><u>Create new task:</u></h3>
      <CreateTask onCreateTask={addTask} />
      <hr />
      {/* Show list */}
      <h3><u>Tasks List:</u></h3>
      <TasksList listOfTasks={tasks} />
    </div>
  );
}

export default App;