import Welcome from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from  "./Clock"
import InteractiveWelcome from "./InteractiveWelcome";
import Login from './Login';
import UncontrolledLogin from "./UncontrolledLogin";
import ColourList from "./ColourList";


function App() {
    return (
    <>
        <Welcome name="Pablo" age="31"/>

        <InteractiveWelcome />

        <Counter initialValue={0} />

        <Clock />
        
        <Login />
        
        <ColourList
        colour={[
            {id: 1, name: "Red"},
            {id: 2, name: "Green"},
            {id: 3, name: "Blue"},
        ]}
        />
    </>
    )
}

export default App