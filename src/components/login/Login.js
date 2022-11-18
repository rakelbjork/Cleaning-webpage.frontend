import React, { useState } from "react";
import "../login/Login.css"

const Login = (event) => {
    event.preventDefault();


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


    const { setLoggedInUser } = props;

    const handleLogin = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:8080/api/auth/login`, {
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

        response = await fetch(`http://localhost:8080/api/auth/whoami?token=${token}`)
        let user = await response.json();
        setLoggedInUser(user);
    }


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

}

export default Login;