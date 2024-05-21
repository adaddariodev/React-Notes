import React, { useEffect, useState } from "react";
import DeleteTask from "./DeleteTask";

function TasksList({ listOfTasks, updatedTasksList }) {
  // State to store the tasks list
  const [list, setList] = useState([]);

  // Update the list when listOfTasks or updatedTasksList change
  useEffect(() => {
    if (updatedTasksList && updatedTasksList.length > 0) {
      setList(updatedTasksList);
    } else {
      setList(listOfTasks);
    }
  }, [listOfTasks, updatedTasksList]);

  return (
    <div className="TasksList">
      <ul>
        {list.map((task, index) => (
          <div key={index}>
            <li><b>Title:</b> {task.title}</li>
            <li><b>Description:</b> {task.description}</li>
            <li><b>Priority:</b> {task.priority}</li>
            <li><b>Completed:</b> {task.isCompleted ? 'Yes' : 'No'}</li>
            <DeleteTask 
              index={index} 
              listOfTasks={listOfTasks} 
              updatedTasksList={updatedTasksList} 
              task={task} />
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
