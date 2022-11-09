import { Button, Box } from "@mui/material";
import React, { useState } from "react";
import RequireAuth from "./RequireAuth";
import "../login/Login.css"

const Login = (props) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const { setLoggedInUser } = props;

    const handleLogin = async (event) => {
        event.preventDefault();

        let response = await fetch('http://localhost:8080/api/auth/login`, {
            method: 'POST',

            body: JSON.stringify({
                username: values.username,
                password: values.password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        let token = await response.text();

        response = await fetch(`http://localhost:8080/api/auth/whoami?token=${token}`)

        let user = await response.json();

        if (token ==user.token) {
        setLoggedInUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.name});
    };

    return (
        <div>

            <h2>Login</h2>
            <form>
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Username..."
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <p>Password</p>
                <input
                    type="password"
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br /><br />
                <button onClick={handleLogin}>Login</button>

            </form>

        </div>
    );

export default Login;