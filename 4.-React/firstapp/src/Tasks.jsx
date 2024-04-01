function Task ({titulo, id, completed, removeTask, handleChange}) {
    return (
        <li style={{display: "flex"}}>
            <input type="checkbox" onClick={completed}></input>
        </li>
    )
}
