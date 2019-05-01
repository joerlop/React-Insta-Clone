import React from 'react';
import './Login.scss';

import instagram from "../../images/instagram.svg";

function Login(props) {
    console.log(props);
    return (
        <div className="Container">
            <div className="Login">
                <img src={instagram}></img>
                <form>
                    <input placeholder="Username" onChange={(event) => props.change(event)} value={props.username}></input>
                    <input placeholder="Password"></input>
                    <button onClick={(e) => props.toggle(e)}>Log in</button>    
                </form>        
            </div>
        </div>
    );
}
  
export default Login;