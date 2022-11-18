import React, { useState } from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineChevronUp} from 'react-icons/hi'
import './navBar/Navbar.css';
import '../pages/homepage.css';
import logo from '../assets/logoStadaFint.png';


const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = ()  => setClick(!click)

    return(
        <nav className='nav'>
            <div className='d-flex justify-content-between d-sm-none'>
            <img class="logo-width" src={logo} className="logo" alt="cleaning-logo" />
                <h1><span>Städafint AB</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-manu'}>
                <li><a href='d-flex align-items-center justify-content-center bg-info border-radius p-4 shadow-sm">'>Hem</a></li>
                <li><a href='d-flex align-items-center justify-content-center bg-info border-radius p-4 shadow-sm"'>Städningar</a></li>
                <li><a href='d-flex align-items-center justify-content-center bg-info border-radius p-4 shadow-sm"'>Om oss</a></li>
                <li><a href='d-flex align-items-center justify-content-center bg-info border-radius p-4 shadow-sm"'>Kontakt</a></li>
                </ul>
               <div className='meny' onClick={handleClick}>
                {click ? (<HiOutlineChevronUp className='icon' />) : <HiOutlineMenu className='icon'/>}
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;