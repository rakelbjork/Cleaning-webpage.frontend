import React, { useState } from "react";
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
        Navigate("MyPage");

    }

    return (
        <>
       
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

                <div className="flexGrow">
                <Link to="/register">
                <button>Registrera ny användare</button>
                </Link>
            </div>

            </form>

        </div>
        </>
    );

}

export default Login;