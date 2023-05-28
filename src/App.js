import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blogposts from './Pages/BlogOverzicht/Blogposts'
import Blogpost from './Pages/Blogpost/Blogpost'
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
          <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Blogposts" element={<PrivateRoute isAuthenticated={isAuthenticated}><Blogposts/></PrivateRoute>}/>
            <Route path="/Blogpost/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}><Blogpost/></PrivateRoute>}/>
            <Route path="/Login" element={<Login setIsAuth={ toggleIsAuthenticated}/>}/>
        </Routes>
      </>
  );
}

export default App;