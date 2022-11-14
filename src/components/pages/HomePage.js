import React, { useEffect } from 'react';
import "../pages/homePage.css";

import logo from "../assets/logoStadaFint.png";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import RegisterForm from "../register/RegisterForm"

const HomePage = (props) => {
    const { loggedInUser, setLoggedInUser } = props;
    
    useEffect(() => {
        let storageUser = localStorage.getItem("user");
        let savedPerson = JSON.parse(storageUser);
        setLoggedInUser(savedPerson);
    }, [])
    const navigate = useNavigate();

    return (
        <div>
         {loggedInUser ? (
            <Navigate to="/mypage"></Navigate>
         ) : (
            <>
            <header className="header-homepage">
                <img src={logo} className="logo" alt="cleaning-logo" />

                <li><a href="#our-services">VÅRA PAKET</a></li>
                <li><a href="/">HÄR FINNS VI</a></li>
                <li><a href="/">VI PÅ STÄDAFINT AB</a></li>
            </header>
            </>
         )}
        </div>
    )
}

export default Home;