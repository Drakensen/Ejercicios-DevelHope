import { useEffect, useState, useRef } from "react"

export function Counter({initialValue}) {
    const [counter, setCounter] = useState(initialValue);
    const directionRef = useRef("initial");
    const prevValueRef  = useRef(initialValue);

    useEffect(() => {
        if (counter > prevValueRef.current) {
            directionRef.current = "up";
        } 
        else if (counter < prevValueRef.current) {
            directionRef.current = "down"
        }
        if (directionRef.current !== "initial") {
            console.log("Direction of change: " + directionRef.current);
        }
    prevValueRef.current = counter;
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