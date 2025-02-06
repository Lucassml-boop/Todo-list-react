import React from "react";
import styles from "../Styles/TodoItem.module.css";

function TodoItem({todo, removeTodo, toggleComplete}){
    return(
        <li className={styles.item}>
           <span className={todo.completed ? styles.completed : ""}>{todo.text}</span> 
            <button className={styles.button} onClick={() => toggleComplete(todo.id)}>✅</button>
            <button className={styles.button} onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
    );
}

export default TodoItem;