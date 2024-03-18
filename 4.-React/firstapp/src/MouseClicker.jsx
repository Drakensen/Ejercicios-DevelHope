export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.currentTarget.name)
    }

    return (
        <>
        <button name="One" onClick={handleButtonClick}>Button 1</button>
        <button name="Two" onClick={handleButtonClick}>Button 2</button>
        </>
    )
}