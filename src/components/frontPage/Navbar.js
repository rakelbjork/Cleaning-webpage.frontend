import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineChevronUp} from 'react-icons/hi'
import Login from '../login/Login';
import './navBar/Navbar.css';
import '../pages/homepage.css';
import logo from '../assets/städafint1.png';
import Kontakt from '../pages/Kontakt';
import Services from './booking/Services';


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = ()  => setClick(!click)

    return(
      <>
              <nav className='nav'>
            <img src={logo} className="logo" alt="städafint1.png" />
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
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
      <div className='meny' onClick={handleClick}>
                {click ? (<HiOutlineChevronUp className='icon' />) : <HiOutlineMenu className='icon'/>}
                </div>
               
    </nav>
    <Outlet />
    </>
    );
}

export default Navbar;