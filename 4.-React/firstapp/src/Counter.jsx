import { useState } from "react";

export function Counter({decrementValue, resetValue}) {
    const [counter, setCounter] = useState(0);
    function  increment() {
        setCounter(prevCounter => prevCounter + 1)
    }
    function decrement() {
        setCounter(prevCounter => prevCounter - decrementValue)
    }
    function reset() {
        setCounter(resetValue)
    }

    return (
    <>  
        <h2> {counter} </h2>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
    </>
    )
}