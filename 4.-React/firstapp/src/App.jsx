import { HelloWorld } from "./HelloWorld";
import { MessageWBD } from "./MessageWBD";
import Welcome from "./Welcome";
import { Counter } from "./Counter";
import AlertClock from "./AlertClock";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";

function App() {
    return (<div>
        <HelloWorld />

        <MessageWBD />

        <Welcome name="Pablo" age="31"/>
        <Welcome />

        <Counter decrementValue={1} resetValue={0}/>

        <Clock />

        <MouseClicker />
    </div>)
}

export default App