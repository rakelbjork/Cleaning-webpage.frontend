import React, { Component } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../frontPage/Navbar';

const Logout = () => {
    const navigate = useNavigate();
        useEffect(() => {
        
        setTimeout(() => {
            if (localStorage.getItem("loggedInUser") == null)
            {
                navigate("/");            

            }else {
                localStorage.removeItem("loggedInUser")
                window.location.reload();

            } 
        }, 100);
        
      });
    <div>Du loggas nu ut</div>
}
export default Logout
