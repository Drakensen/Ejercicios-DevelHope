import Age from "./Age";

function Welcome ({ name="Invitado", age }) {
    return (
        <div className="welcome">  
            <p>Welcome, <b>{name}</b> </p>
        </div> 
    );
}
    
export default Welcome;