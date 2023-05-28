import React from 'react';
import {Navigate} from "react-router-dom";

function PrivateRoute({isAuthenticated,children}) {
    if(isAuthenticated){
      return children
    }
    else{
       return <Navigate to="/Login" replace/>
    }
}

export default PrivateRoute;