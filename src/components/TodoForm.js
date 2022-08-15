import React, {useState} from "react";

export default function TodoForm(props) {

      const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

  

function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
}

    return(
        <div className="todo-form">
            <form className="todo-form-2" onSubmit={handleSubmit}>
                <input type="text"
                id="new-todo-input"
                className="add-todo-input"
                name="text"
                autoComplete="off"
                placeholder="What do you need to do today?"
                value={name}
                onChange={handleChange} />
                <button className="add-todo-btn">Add it!</button>
            </form>
        </div>
    )
}