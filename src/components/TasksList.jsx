import React, { useEffect, useState } from "react";
import ModifyTask from './ModifyTask';
import PropTypes from "prop-types";

function TasksList({ tasks, onDeleteTask, onModifyTask, updatedTasksList }) {
  // list of tasks state
  const [list, setList] = useState([]);

  // Update the list when 'tasks' or 'updatedTasksList' change
  useEffect(() => {
    if (updatedTasksList && updatedTasksList.length > 0) {
      setList(updatedTasksList);
    } else {
      setList(tasks);
    }
  }, [tasks, updatedTasksList]);

  return (
    <div className="TasksList">
      <ul>
        {list.map((task, index) => (
          <div key={index}>
            <hr />
            {/* Task infos */}
            <li><b>Title:</b> {task.title}</li>
            <li><b>Description:</b> {task.description}</li>
            <li><b>Priority:</b> {task.priority}</li>
            <li><b>Completed:</b> {task.isCompleted ? 'Yes' : 'No'}</li>
            <br />
            {/* Delete task button */}
            <div className="deleteTask">
              <button onClick={() => onDeleteTask(index)}>
                Delete {task.title}
              </button>
            </div>
            {/* Modify task button */}
            <h2></h2>
            <ModifyTask onModifyTask={task}/>
            <hr />
          </div>
        ))}
      </ul>
      <br /><br />
      <hr />
    </div>
  );
}

// props validation
TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  })).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  updatedTasksList: PropTypes.arrayOf(PropTypes.object),
  onModifyTask: PropTypes.func.isRequired
};

export default TasksList;