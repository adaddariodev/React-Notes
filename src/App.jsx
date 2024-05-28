import React, { useState } from 'react';
import CreateTask from './components/CreateTask';
import TasksList from './components/TasksList';

function App() {
  //tasks state 
  const [tasks, setTasks] = useState([]);

  // create a new array to store the tasks.
  function addTask(newTask){
    setTasks([...tasks, newTask]);
  }

  // filters all the tasks with an index different than the one from the task we want to remove, and return the array with all the tasks except the one we want to remove.
  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

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
      <TasksList tasks={tasks} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;