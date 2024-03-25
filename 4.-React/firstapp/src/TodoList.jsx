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
    <div className="todo">
    <form onSubmit={handleAddTodo}>
        <input name="todo" className="new-todo" />
        <button type="submit">Add</button>
        <button onClick={() => setTodos([])}>Reset</button>
    </form>

    <ul>
        {todos.map((todo, index) => (
        <li className="litodo" key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
        </li>
        ))}
    </ul>
    </div>
);
}

export default TodoList