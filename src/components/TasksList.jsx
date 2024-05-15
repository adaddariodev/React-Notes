import React from "react";
import DeleteTask from "./DeleteTask";

function TasksList({listOfTasks, updatedTasksList}) {

  // update the (visual) list by creating a STATE containing a duplicate of the actual list
  let list = [];
  // create dummy list in order to do not override the prop
  // updatedTasksList at the start of the component doesnt exist (undefined)
  // because of this the 'list' cannot be declared and initialized

  // useEffect in order to do not create an infinite loop when the component load
  // exec this code when the component finished rendering
  if(updatedTasksList === undefined || updatedTasksList.length === 0){
    list = [listOfTasks];
  }
  else
  {
    list = [updatedTasksList];
  }


  return (
    <div className="TasksList">
      <ul>
        {
          updatedTasksList === undefined ? (
            listOfTasks.map((task, index) => (
              <div key={index}>
                <li><b>Title:</b> {task.title}</li>
                <li><b>Description:</b> {task.description}</li>
                <li><b>Priority:</b> {task.priority}</li>
                <DeleteTask 
                  index={index} 
                  listOfTasks={listOfTasks} 
                  updatedTasksList={updatedTasksList} 
                  task={task} />
                <hr />
              </div>
            ))
          ) : (
            list.map((task, index) => (
              <div key={index}>
                <li><b>Title:</b> {task.title}</li>
                <li><b>Description:</b> {task.description}</li>
                <li><b>Priority:</b> {task.priority}</li>
                <DeleteTask 
                  index={index} 
                  listOfTasks={listOfTasks} 
                  updatedTasksList={updatedTasksList} 
                  task={task} />
                <hr />
              </div>
            ))
          )
        }
      </ul>
    </div>
  ) 
}

export default TasksList;

