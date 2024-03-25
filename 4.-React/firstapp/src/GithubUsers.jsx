import { useEffect, useState } from 'react';
import GithubUser from './GithubUser';

export function GithubUsers () {
    const [users, setUsers] = useState([]);
    const [input, setInput]= useState("");
    const searchUser=(event)=> {
        setInput(event.target.value)
    }

    function hubUsers () {
        setUsers([...users, input])
    }

    return (
        <>
        <div className='gitusersearch'>
            <input type="text" onChange={searchUser}/>
            <button onClick={hubUsers}>Search user GitHub</button>
        </div>
        <ul>
            {users.map(user => {
                return <li>{<GithubUser username={user}></GithubUser>}</li>
            })
        }
        </ul>        
        </>
    )
}