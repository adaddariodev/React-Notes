// import
import React, {useState} from "react";

// task prop
// titolo
// descrizione
// priorita (bassa-media-alta)

// funzione componente
function CreateTask({onCreateTask}) {

  //states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  // funzioni
  function handleTitleChange(e){
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e){
    setDescription(e.target.value);
  }

  function handlePriorityChange(e){
    setPriority(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    // validation checks
    if(title.length == 0){
      alert('Title field is empty!');
      return;
    }
    if(description.length == 0){
      alert('Description field is empty!');
      return;
    }
    if(priority == null || priority == ''){
      alert('Priority field is empty!');
      return;
    }

    const task = {
      title,
      description,
      priority
    };

    // Passa la nuova task al genitore per la creazione
    onCreateTask(task);

    // Reset campi del modulo
    setTitle('');
    setDescription('');
    setPriority('low');
  }

return (
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titolo: </label>
          <input type="text" value={title} onChange={handleTitleChange} />
          <br/><br/>
        </div>
        <div>
          <label>Descrizione: </label>
          <textarea value={description} onChange={handleDescriptionChange} />
          <br/><br/>
        </div>
        <div>
          <label>Priorità: </label>
          <select value={priority} onChange={handlePriorityChange}>
            <option>Select the priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <br/><br/>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateTask;