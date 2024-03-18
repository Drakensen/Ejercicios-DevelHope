import Welcome from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from  "./Clock"
import { MouseClicker } from "./MouseClicker";
import InteractiveWelcome from "./InteractiveWelcome";

function App() {
    return (
    <>
        <Welcome name="Pablo" age="31"/>

        <InteractiveWelcome />

        <Counter decrementValue={1} resetValue={0}/>

        <Clock />

        <MouseClicker />
    </>
    )
}

export default App