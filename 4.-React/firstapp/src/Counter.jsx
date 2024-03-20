import { useEffect, useState, useRef } from "react";

export function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue);
    const directionRef = useRef("initial");
    const prevValueRef = useRef(initialValue);

    useEffect(() => {
        if (counter > initialValue && directionRef.current != "up") {
            directionRef.current = "up"; 
            console.log(directionRef.current)
        } if (counter < initialValue && directionRef.current != "down") {
            directionRef.current = "down";
            console.log(directionRef.current)
        }

    prevValueRef.current = counter;
    }, [counter, initialValue]);

    function increment() {
    setCounter(initialValue => initialValue + 1);
    }

    function decrement() {
    setCounter(initialValue => initialValue - 1);
    }

    function reset() {
    setCounter(initialValue);
    console.log("Reset")
    }

    return (
    <>
        <h2 className="counter"> {counter} </h2>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
    </>
    );
}