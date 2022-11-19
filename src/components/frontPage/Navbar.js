import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineChevronUp} from 'react-icons/hi'
import Login from '../login/Login';
import './navBar/Navbar.css';
import '../pages/homepage.css';
import logo from '../assets/logoStadaFint.png';


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = ()  => setClick(!click)

    return(
        <nav className='nav'>
            <img class="logo-width" src={logo} className="logo" alt="cleaning-logo" />
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Registrera ny användare</Link>
        </li>
        <li>
          <Link to="/contact">Kontakta oss</Link>
        </li>
      </ul>
      <div className='meny' onClick={handleClick}>
                {click ? (<HiOutlineChevronUp className='icon' />) : <HiOutlineMenu className='icon'/>}
                </div>
    </nav>
    );
}

export default Navbar;