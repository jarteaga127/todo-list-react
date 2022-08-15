import React, {useState} from "react";

export default function Todo(props) {

const [isEditing, setEditing] = useState(false); //know the difference between isEditing and setEditing

const [newName, setNewName] = useState('');

function handleChange(e) {
    setNewName(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
}

const editingTemplate = (
    <form className="editing-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" 
        type="text" 
        value={newName} 
        onChange={handleChange} />
      </div>
      <div className="edit-btn-group">
        <button type="button" onClick={() => setEditing(false)} className="todo-cancel">
          Cancel
          <span className="visually-hidden"> renaming {props.name}</span>
        </button>
        <button type="submit" className="save-edit">
          Save
          <span className="visually-hidden"> new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="todo-column">
      <div className="todo-item">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="button-group">
          <button type="button" onClick={() => setEditing(true)} className="edit-btn">
            Edit 
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </button>
        </div>
    </div>
  );

    return (
        <div className="todo-column-small">
            <div className="todo-item">{isEditing ? editingTemplate : viewTemplate}
            </div>           
        </div>
    )
}