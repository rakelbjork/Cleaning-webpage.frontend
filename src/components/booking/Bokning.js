import { useState } from "react";
import React from "react";
import './Booking.css';

const Bokning = (props) => {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [optionalMessage, setMessage] = useState("");

    const handleSave = async (event) => {
        event.preventDefault()

        console.log(date);
        console.log(time);
        console.log(optionalMessage);

        await fetch(`${process.env.REACT_APP_BASE_URL}/api/clean`, {
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
        window.location.reload();
    }

    return (
        <div>Lägg till bokning
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