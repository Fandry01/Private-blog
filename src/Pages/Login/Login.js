import React from 'react';
import './login.css';
import {Link} from "react-router-dom";

function Login({setIsAuth}) {
    return (
        <div className="loginBox">
            <Link to="/Blogposts">
                <button className="loginButton" type="button" onClick={()=> setIsAuth(prev => ! prev)}>Inloggen</button>
            </Link>
        </div>


    );
}

export default Login;