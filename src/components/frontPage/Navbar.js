import React, { useState } from 'react'
import { Link, Outlet, renderMatches } from 'react-router-dom';
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineChevronUp} from 'react-icons/hi'
import Login from '../login/Login';
import './navBar/Navbar.css';
import '../pages/homepage.css';
import logo from '../assets/städafint1.png';
import Kontakt from '../pages/Kontakt';
import Services from '../booking/Services';


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = ()  => setClick(!click)
    var condition = null;




if (localStorage.getItem("loggedInUser") == null)
{
  condition = 1;
} else {
  condition = 2;
}


    return(
      <>
              <nav className='navbar'>
            <img src={logo} className="logo" alt="städafint1.png" />
            <div className='nav-menu'>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
        {
      (()=> {
        switch (condition) {
          case 1: return <Link to="/login">Login</Link>;
          case 2: return <Link to="/logout">Logga ut</Link>;
          default: <div>Debug</div>;
        }
      })()
     }
        </li>
        <li>
          <Link to="/bokning">Boka</Link>
        </li>
        <li>
          <Link to="/services">Våra tjänster</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakta oss</Link>
        </li>
      </ul>
      </div>
      <div className='meny' onClick={handleClick}>
                {click ? (<HiOutlineChevronUp className='icon' />) : <HiOutlineMenu className='icon'/>}
                </div>
               
    </nav>
    <Outlet />
    </>
    );
}

export default Navbar;