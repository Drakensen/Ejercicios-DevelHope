import Welcome from "./Welcome";
import { Counter } from "./Counter";
import { Clock } from  "./Clock"
import InteractiveWelcome from "./InteractiveWelcome";
import Login from './Login';
import UncontrolledLogin from "./UncontrolledLogin";
import Colours from "./Colours";
import ColourList from "./ColourList"
import TodoList  from "./TodoList";
import { Container } from "./Container";


export function App() {
    return (
    <div className="app">
        <Welcome name="Pablo" age="31"/>

        <InteractiveWelcome />

        <Counter initialValue={0} />

        <Clock />
        
        <Login />
        
        <TodoList />

        <Container title="Hello, Click here">
            <h3>BYE</h3>
        </Container>
    </div>
    )
}

export default App