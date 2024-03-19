import { useState } from "react";

export function TodoList() {
const [todos, setTodos] = useState([]);

function handleAddTodo(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((todos) => [...todos, todo]);
    event.target.elements.todo.value = "";
}

function handleRemoveTodo(index) {
    setTodos((todos) => todos.filter((_, i) => i !== index));
}

return (
    <div>
    <form onSubmit={handleAddTodo}>
        <input name="todo" />
        <button type="submit">Add</button>
    </form>

    <ul>
        {todos.map((todo, index) => (
        <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
        </li>
        ))}
    </ul>

    <button onClick={() => setTodos([])}>Reset</button>
    </div>
);
}

export default TodoList