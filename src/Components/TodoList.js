import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodos = [...todos, {id: Date.now(), text, completed: false}];
        setTodos(newTodos);
    };
    const removeTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const toggleComplete = (id) => {
        setTodos(todo =>
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />   
                ))}
            </ul>
        </div>
    );
}

export default TodoList;