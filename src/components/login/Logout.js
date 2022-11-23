import React, { Component } from 'react'
import { baseUrl } from '../pages/HomePage';
import {Link} from 'react-router-dom'

export default class Logout extends Component {
   
    logout = () => {
        window.localStorage.clear();
    }
    render(){
        const isLoggedIn = window.localStorage.getItem('token')
        {isLoggedIn ? <Logout /> : null}

        return(
            <Link onClick={this.logout} className="logout">Logout</Link>
    
        )
    }
}
