import React from "react";

function TodoItem({todo, removeTodo, toggleComplete}){
    return(
        <li style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.text}
            <button onClick={() => toggleComplete(todo.id)}>✅</button>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
    );
}

export default TodoItem;