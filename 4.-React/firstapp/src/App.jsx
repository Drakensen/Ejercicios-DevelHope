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
import GithubUser from "./GithubUser";


export function App() {
    return (
    <div className="app">
        <Welcome name="Pablo"/>
        <hr></hr>
        <div className="counterzone"><Counter initialValue={0} /></div>
        <hr></hr>
        <div className="timediv">
            <LanguageSelector>
            <Clock />
            </LanguageSelector>
        </div>
        <hr></hr>
        <Login />
        <hr></hr>
        <TodoList />
        <hr></hr>
        <Container title="Hello, Click here">
            <p>BYE</p>
        </Container>
        <hr></hr>
        <GithubUser username={"Drakensen"} />
    </div>
    )
}

export default App