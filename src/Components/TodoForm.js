import React, {useState} from "react";
import styles from "../Styles/TodoForm.module.css";

function TodoForm({addTodo}){
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nova tarefa..."
            />
            <button className={styles.button} type="submit">Adicionar</button>
        </form>
    );
}

export default TodoForm;