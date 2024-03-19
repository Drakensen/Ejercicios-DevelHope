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
import LanguageSelector  from "./LanguageSelector";


export function App() {
    return (
    <div className="app">
        <Welcome name="Pablo" age="31"/>

        <InteractiveWelcome />

        <Counter initialValue={0} />

        <div className="timelocal">
            <LanguageSelector>
            <Clock />
            </LanguageSelector>
        </div>
        
        <Login />
        
        <TodoList />

        <Container title="Hello, Click here">
            <p>BYE</p>
        </Container>
    </div>
    )
}

export default App