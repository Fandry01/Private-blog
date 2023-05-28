import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
       <nav>
           <div className="navContainer">
               <ul>
                   <li>
                       <NavLink to="/">Home</NavLink>
                   </li>
                   <li>
                       <NavLink to="/Blogposts">Blogposts</NavLink>
                   </li>
                   <li>
                       <NavLink to="/Login">Login</NavLink>
                   </li>
               </ul>
           </div>
       </nav>
    );
}

export default Navigation;