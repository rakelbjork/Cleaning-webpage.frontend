import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="Hem">Städafint AB</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

    <ReactBootStrap.Nav className="mr-auto">

    <Link to="/Tjanster">
    <ReactBootStrap.Nav.Link href="#Tjanster">Våra städtjänster</ReactBootStrap.Nav.Link>
    </Link>
    
      
    <Link to="/MinaSidor">
    <ReactBootStrap.Nav.Link href="#MinaSidor">Mina sidor</ReactBootStrap.Nav.Link>
    </Link>

    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav>
    <Link to="/Kontakt">
    <ReactBootStrap.Nav.Link href="Kontakt">Kontakt</ReactBootStrap.Nav.Link>
    </Link>    
  
    <Link to="/SkapaKonto">
    <ReactBootStrap.Nav.Link href="SkapaKonto">Skapa konto</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;