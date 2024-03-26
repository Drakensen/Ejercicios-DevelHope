import { useState } from "react";

function useCounter (initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement () {
        setCounter((c) => c - 1)
    }

    function handleCounterReset () {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}

export function HookCounter({ initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}