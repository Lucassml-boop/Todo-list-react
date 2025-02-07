import React from "react";
import styles from "../Styles/TodoItem.module.css";
import {motion} from "framer-motion";

function TodoItem({todo, removeTodo, toggleComplete}){
    return(
        <motion.li
            className={styles.item}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, x: -50}}
            transition={{duration: 0.8}}
        >
        <span className={todo.completed ? styles.completed : ""}>{todo.text}</span> 
        <div>
            <button className={styles.button_green} onClick={() => toggleComplete(todo.id)}>✅</button>
            <button className={styles.button_red} onClick={() => removeTodo(todo.id)}>❌</button>
        </div>
        </motion.li>
    );
}

export default TodoItem;