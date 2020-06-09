import React from 'react';
import './Todo.css';
function Todo({title}) {
    return (
        <div className="todo" >
            <h1 className="todo__header" >{title}</h1>
            <button type="submit" >DELETE</button>
        </div>
    )
}

export default Todo;
