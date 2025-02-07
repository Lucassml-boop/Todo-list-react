import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {useTheme} from "../Context/ThemeContext";

import styles from "../Styles/TodoList.module.css"

function TodoList() {
    const [todos, setTodos] = useState([]);
    const {darkMode, toggleTheme} = useTheme();

    const addTodo = (text) => {
        const newTodos = [...todos, {id: Date.now(), text, completed: false}];
        setTodos(newTodos);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

    const toggleComplete = (id) => {
        setTodos(todo =>
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
            <button onClick={toggleTheme} className={styles.themeButton}>
                {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro" }
            </button>
            <h1 className={`${styles.title} ${darkMode ? styles.title_dark : ""}`}>Lista de Tarefas</h1>
            <TodoForm addTodo={addTodo} />
            <ul className={`${styles.text} ${darkMode ? styles.title_text : ""}`}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />   
                ))}
            </ul>
        </div>
    );
}

export default TodoList;