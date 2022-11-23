import React, { Component } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            window.localStorage.clear();
            navigate("/");
        }, 1000);
      });
    <div>Du loggas nu ut</div>
}
export default Logout
