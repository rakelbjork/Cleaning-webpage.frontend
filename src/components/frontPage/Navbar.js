import React, { useState } from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineChevronUp} from 'react-icons/hi'
import './navBar/Navbar.css';
import logo from '../assets/logoStadaFint.png';


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = ()  => setClick(!click)

    return(
        <div className='navbar'>
            <div className='container'>
            <img src={logo} className="logo" alt="cleaning-logo" />
                <h1><span>Städafint AB</span></h1>
                <button className='btn'>Logga in</button>
                <ul className={click ? 'nav-menu active' : 'nav-manu'}>
                <li><a href='#'>Hem</a></li>
                <li><a href='#'>Städningar</a></li>
                <li><a href='#'>Om oss</a></li>
                <li><a href='#'>Kontakt</a></li>
                </ul>
               <div className='meny' onClick={handleClick}>
                {click ? (<HiOutlineChevronUp className='icon' />) : <HiOutlineMenu className='icon'/>}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar;