import React, { Component } from 'react'
import { baseUrl } from '../pages/HomePage';
import {Link} from 'react-router-dom'

export default class Logout extends Component {
   
    logout = () => {
        window.localStorage.clear();
        window.location.href = baseUrl +"login";
    }
    render(){
        return(
            <Link onClick={this.logout} className="logout">Logout</Link>
        )
    }
}

/*const removeToken = (loggedInUser) => { 
    localStorage.removeItem("token");
    setToken(null);
  }
  <Button onClick={removeToken}>
  LogOut
  </Button>*/