import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Register = (props) => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
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
                username: username,
                firstname: firstname,
                lastname: lastname,
                adress: adress,
                phonenumber: phonenumber,
                username: username,
                password: password
            })
        })

        let response = await fetch(`http://localhost:8080/api/appuser/${user.id}/appuser`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        let appuser = await response.json()

        setAppUser(appuser)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }


    return (
        <div>
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <p>Username</p>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

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

                <p>Password</p>
                <textarea
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br /><br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
                <button onClick={handleSave}>Save</button>

            </form>

        </div>
    )
            }

export default Register;