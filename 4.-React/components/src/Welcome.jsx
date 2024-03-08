import Age from "./Age";

function Welcome ({ name="Invitado", age }) {
    return (
        <>  <p>Welcome, <b>{name}</b></p>
            <Age age={age}></Age>
        </> 
    );
}
    
export default Welcome;