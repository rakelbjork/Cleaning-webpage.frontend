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

        await fetch(`http://localhost:8080/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password
            })
        })

        let response = await fetch(`http://localhost:8080/api/appuser/${user.long}/user`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        let appuser = await response.json()

        setAppUser(appuser)
    }


    return (
        <div>
            <h2>Register</h2>
            <form>
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
    )
            }

export default Register;