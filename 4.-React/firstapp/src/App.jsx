import { HelloWorld } from "./HelloWorld";
import { MessageWBD } from "./MessageWBD";
import Welcome from "./Welcome";
import { Counter } from "./Counter";

function App() {
    return (<div>
        <HelloWorld />

        <MessageWBD />

        <Welcome name="Pablo" age="31"/>
        <Welcome />

        <Counter decrementValue={1} resetValue={0}/>
    </div>)
}

export default App