import React from "react";

function DeleteTask({taskIndex, listOfTasks, updatedTasksList, task}) {

  function deleteByIndex() {
    //update the current list
    const updatedTasks = [...listOfTasks];
    updatedTasks.splice(taskIndex, 1);
    updatedTasksList(updatedTasks);
  }
  

  return(
    <div className="deleteTask">
      <br />
      <button onClick={deleteByIndex}>Delete {task.title}</button>
    </div>
  )

}

export default DeleteTask;