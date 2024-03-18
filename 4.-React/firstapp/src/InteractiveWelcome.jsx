import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
    const [inputValue, setInputValue] = useState('')

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }


    return (
        <>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <Welcome name={inputValue} />
        </>
    )
}

export default InteractiveWelcome;