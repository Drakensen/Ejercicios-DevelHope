export function MouseClicker() {
    function handleImageClick(event) {
        console.log(event.target.src)
        event.stopPropagation()
    }

    function handleButtonClick(event) {
        console.log(event.target.name)
    }

    return (
        <button name="Logo React" onClick={handleButtonClick}><img onClick= {handleImageClick} src="reacticon.png"/></button>
    )
}