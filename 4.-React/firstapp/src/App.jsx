import Welcome from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from  "./Clock"
import InteractiveWelcome from "./InteractiveWelcome";
import Login from './Login';
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
    return (
    <>
        <Welcome name="Pablo" age="31"/>

        <InteractiveWelcome />

        <Counter decrementValue={1} resetValue={0}/>

        <Clock />

        <UncontrolledLogin />
    </>
    )
}

export default App