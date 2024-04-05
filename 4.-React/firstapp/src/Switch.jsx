export default function App() {
    return (
    <Router>
        <div className="app">
        
        <Switch>
            <Route path="/users/:username" component={ShowGithubUser} />
        </Switch>
        </div>
    </Router>
    );
}