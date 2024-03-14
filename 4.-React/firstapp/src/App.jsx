import { HelloWorld } from "./HelloWorld";
import { MessageWBD } from "./MessageWBD";
import Welcome from "./Welcome";

function App() {
    return (<div>
        <HelloWorld />

        <MessageWBD />

        <Welcome name="Pablo" age="31"/>
        <Welcome />
    </div>)
}

export default App