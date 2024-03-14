import Age from "./Age";

function Welcome ({ name="Invitado", age }) {
    return (
        <>  <p>Welcome, <b>{name}</b></p>
            {age>18 && <Age age={age} />}
            {age && <Age age={age} />}
            {age>18 && age<65 && <Age age={age} />}
            {age>18 && age<65 && name==="Jhon" && <Age age={age} />}
        </> 
    );
}
    
export default Welcome;