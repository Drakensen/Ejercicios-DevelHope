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
import { GithubUsers } from "./GithubUsers";
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

export default function App() {
    return (
    <Router>
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
        <GithubUsers />
        <hr></hr>
        
    </div>
    </Router>
    )
}