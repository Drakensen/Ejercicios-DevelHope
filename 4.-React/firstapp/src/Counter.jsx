import { useEffect, useState, useRef } from "react";

export function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue);
    const [firstIncrement, setFirstIncrement] = useState(true);
    const [firstDecrement, setFirstDecrement] = useState(true);
    const directionRef = useRef("initial");
    const prevValueRef = useRef(initialValue);

    useEffect(() => {
    if (counter > prevValueRef.current && firstIncrement) {
        console.log("up");
        setFirstIncrement(false);
    } else if (counter < prevValueRef.current && firstDecrement) {
        console.log("down");
        setFirstDecrement(false);
    }
    if (counter > prevValueRef.current) {
        directionRef.current = "up";
    } else if (counter < prevValueRef.current) {
        directionRef.current = "down";
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
    setFirstIncrement(true);
    setFirstDecrement(true);
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