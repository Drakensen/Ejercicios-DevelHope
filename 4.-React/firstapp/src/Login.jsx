import { useEffect, useRef, useState } from "react";

export function Login () {
    const [data, setData] = useState({
        username: "",
        password: "",
        section: false,
    })

    const mountedRef = useRef(false)
    const inputRef = useRef(null)

    function handleInputChange(event) {
        const name= event.target.name
        const value= event.target.value
        const checked= event.target.checked
        const type= event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked:value,
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Logged")
    }

// #region RETURN
    return (
        <form onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <input type="text" name="username" value={data.username} onChange={handleInputChange} />
            <input type="password" name="password" value={data.password} onChange={handleInputChange}/>
            <input type="checkbox" name="section" checked= {data.section} onChange={handleInputChange} />
            <button type="submit" disabled={!data.username || !data.password}>Login</button>
            <button onClick={() => setData({ username: '', password: '', section: false })}>Reset</button>
        </form>
    )
}

export default Login