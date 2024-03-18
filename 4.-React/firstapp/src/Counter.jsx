import { useEffect, useState } from "react";

export function Counter({decrementValue, resetValue}) {
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        console.log("I have been mounted");
    }, [])
    
    useEffect(() => {
        console.log(`The value of the counter is ${counter}`);
    }, [counter])

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