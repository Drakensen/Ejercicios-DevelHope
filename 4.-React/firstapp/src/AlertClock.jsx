import { Button } from "./Button"
export function AlertClock () {
    function currentTime() {
        const now = new Date()
        alert(`The current time is + ${now.toLocaleTimeString()}`)
    }

    return (
        <>
        <p>Click the button below to show the current time:</p>
        <Button onClick={currentTime} label="Current Time" />
        </>
    )
}

export default AlertClock;