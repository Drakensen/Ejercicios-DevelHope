import { useEffect, useState } from "react";
import { FormTasks } from "./FormTasks"
import { Tasks } from "./Tasks"

function TaskList() {
    /*
    [{
        titulo: "Barrer",
        completed: False,
        id: 1
    },
    {
        titulo: "Limpiar".
        completed: False,
        id: 2
    }]
    */
    
    //Estado para almacenar las tareas
    const [tasks, setTasks] = useState([{}]);
    
    //Estado para almacenar tareas de usuario


     //Función para cambiar el estado text
    function changeText(event) {
        setText(event.target.value);
    }

    //Función para añadir una nueva tarea
    function addTask(event) {
        event.preventDefault()

        const newId = Math.round(Math.random() * 10000);
        const newTask = {
            id: newId,
            completed: false,
        };
        setTasks([... tasks, newTask]);
        setText("")
    }

    // Función para eliminar tareas
    function removeTask(id) {
        const filteredTasks = tasks.filter((tasks) => tasks.id {
        setTasks(filteredTasks)

        if (tasks.id = )
        })
    }

    //Función para eliminar completados
    function deleteCompleted() {
        const filteredTasks = tasks.filter((tasks) => !tasks.completed)
        setTasks(filteredTasks)

        if (filteredTasks.length == 0) {
            const jsonTasks = JSON.stringify(filteredTasks)
            localStorage.setItem("tasks", jsonTasks)
        }
    }

    useEffect (() => {
        const recoveredTasksJson = (localStorage.getItem("tasks"))
        if (recoveredTasksJson) {
            const recoveredTasks = JSON.parse(recoveredTasksJson)
            setTasks(recoveredTasks)
        }, []);
    }  
    
    useEffect (() => {
        if (tasks.length > 0) {
            const jsonTasks = JSON.stringify(tasks)
            localStorage.setItem("tasks", jsonTasks)
    }, [tasks]);



    return (
        <>
        {tasks.map((tarea) => (
            <Task
                completed={tasks.completed}
                id={tasks.id}
                titulo={tasks.titulo}
                key={tasks.id}
                removeTask={removeTask}
                handleChange={changeComplete}
                />
        ))}
        
        
        </>
    )
}