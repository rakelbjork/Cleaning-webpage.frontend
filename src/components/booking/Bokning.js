import { useState } from "react";
import React from "react";
import './Booking.css';
import { parse } from "@fortawesome/fontawesome-svg-core";

const Bokning = (props) => {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [optionalMessage, setMessage] = useState("");
    const [user, setUser] = useState("");
    const [userId, setUserId] = useState("");

    const handleSave = async (event) => {
        event.preventDefault()

     
        
        try {
            const object = JSON.parse(localStorage.getItem("loggedInUser"));
            if (object) {
                setUser(object);
                console.log(object)
                var id = user.id;
                
                setUserId(id);
                console.log(id);
            }else{
                setUserId(0);
            }
            


        }catch{
            console.log("Där gick något fel")
            console.log(currentUser);
            console.log(parsedUser);

        }

        await fetch(`${process.env.REACT_APP_BASE_URL}/api/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                time: time,
                date: date,
                optionalMessage: optionalMessage,
                id: 1
            })
        })
    }

    return (
        <div className="headerContainer">
            <div className="headerContainer h1">
                <h1>Lägg till bokning</h1>
                </div>
        <form>
            <p>Datum</p>
            <input
            type="text"
            placeholder="2023-05-13"
            onChange={(e) => setDate(e.target.value)}
            />
        </form>

        <form>
            <p>Klockslag</p>
            <input
            type="text"
            placeholder="15:33"
            onChange={(e) => setTime(e.target.value)}
            />
        </form>

        <form>
            <p>Meddelande till städaren</p>
            <input
            type="text"
            placeholder="Valfritt meddelande"
            onChange={(e) => setMessage(e.target.value)}
            />
        </form>
        <button onClick={handleSave}>Boka tid</button>

        </div>
    )
}

export default Bokning