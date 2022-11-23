import React, { useState, Button } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../register/Register";
import "../login/Login.css"

const Login = (props) => {
    

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const Navigate = useNavigate();

    

    const { setLoggedInUser } = (props);


    const handleLogin = async (event) => {
        event.preventDefault();

        let response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let token = await response.text();
        console.log('token: ', token)
        response = await fetch(`http://localhost:8080/api/auth/whoami?token=${token}`)
        let user = await response.json();
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        Navigate("/mypage");

    }

    const logInCheck = async (loggedIn) => {
        loggedIn = JSON.parse(loggedIn);
        try{
            var response = await fetch(`http://localhost:8080/api/auth/whoami?token=${loggedIn.token}`)
            let user = await response.json();
            console.log(user)
            return user;
        } catch {

        }

    }
    

    try{
        var loggedIn = localStorage.getItem("loggedInUser")
        if (loggedIn == null){
            var activeUser = logInCheck(loggedIn);
        } else{
            return <div className="headerContainer h1">Du är redan inloggad</div>
        }
        } catch{
        console.log("Något gick snett med inloggningen! Har du ändrat i LocalStorage manuellt?")
    }

    
    return (
        <div className="headerContainer">
            <div className="headerContainer h1">
                <h1>Login</h1>
                </div>
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
                <br /><br />
                <div className="flexGrow">
                <Link to="/register">
                <button>Registrera ny användare</button>
                </Link>
            </div>
            </form>

        </div>
    );

    

    

}

export default Login;