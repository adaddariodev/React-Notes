import React, { useState } from "react";

function CreateTask({ onCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handlePriorityChange(e) {
    setPriority(e.target.value);
  }

  function handleCompletion(e) {
    setIsCompleted(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation checks
    if (title.trim() === '') {
      alert('Title field is empty!');
      return;
    }
    if (description.trim() === '') {
      alert('Description field is empty!');
      return;
    }
    if (priority === '' || priority === 'Select the priority') {
      alert('Priority field is empty!');
      return;
    }

    const task = {
      title,
      description,
      priority,
      isCompleted
    };

    // Passa la nuova task al genitore per la creazione
    onCreateTask(task);

    // Reset campi del modulo
    setTitle('');
    setDescription('');
    setPriority('');
    setIsCompleted(false);
  }

  return (
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>Title: </label>
          <input type="text" value={title} onChange={handleTitleChange} />
          <br /><br />
        </div>
        <div className="description">
          <label>Description: </label>
          <textarea value={description} onChange={handleDescriptionChange} />
          <br /><br />
        </div>
        <div className="priority">
          <label>Priority: </label>
          <select value={priority} onChange={handlePriorityChange}>
            <option>Select the priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <br /><br />
        </div>
        <div className="completed">
          <label>Completed: </label>
          <input
            type="checkbox"
            name="completed-checkbox"
            checked={isCompleted}
            onChange={handleCompletion}
          />
          <br /><br />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateTask;
