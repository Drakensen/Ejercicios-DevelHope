import { useEffect, useState, useRef } from "react"

export function Counter({initialValue}) {
    const [counter, setCounter] = useState(initialValue);
    const directionRef = useRef("initial")

    useEffect(() => {
        if (counter > initialValue) {
            directionRef.current = console.log("up")
        } 
        else if (counter < initialValue) {
            directionRef.current = console.log("down")
        }
        else if (directionRef.current !== "initial") {
        console.log("Reset");
        }
    }, [counter, initialValue])

    function  increment() {
        setCounter(initialValue => initialValue + 1)
    }
    function decrement() {
        setCounter(initialValue => initialValue - 1)
    }
    function reset() {
        setCounter(initialValue)
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