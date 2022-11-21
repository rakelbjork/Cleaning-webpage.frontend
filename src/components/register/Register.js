import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Register = (props) => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [adress, setAdress] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setRegister, user } = props;


    const handleSave = async (event) => {

        event.preventDefault()

        await fetch(`http://localhost:8080/api/appuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                adress: adress,
                phonenumber: phonenumber,
                username: username,
                password: password
            })
        })

        let response = await fetch(`http://localhost:8080/api/register/create`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        let appUser = await response.json()

        setRegister(user)
    }

    const handleSubmit = (e) => {
        event.preventDefault();
        console.log(username);
    }


    return (
        <>
        
        <div>
            <h2>Registrera ny användare:</h2>
            <form className="register" onSubmit={handleSubmit}>

                <p>Firstname</p>
                <input
                    type="text"
                    placeholder="Firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                />
                <p>Lastname</p>
                <input
                    type="text"
                    placeholder="Lastname"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                />

                <p>Adress</p>
                <input
                    type="text"
                    placeholder="Adress"
                    onChange={(e) => setAdress(e.target.value)}
                    value={adress}
                />

                <p>Phonenumber</p>
                <input
                    type="text"
                    placeholder="Phonenumber"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    value={phonenumber}
                />

                <p>Username</p>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <p>Password</p>
                <textarea
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br /><br />
                <button onClick={handleSave}>Save</button>
                
            </form>
        </div>
        </>
    )
            }

export default Register;