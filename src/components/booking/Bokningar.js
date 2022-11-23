import { useEffect, useState } from "react"; 
import Bokning from './Bokning';
import './Booking.css';

const Bokningar = (props) => {

const [ bokningar, setBokningar] = useState([{time: "time", date: "date", optionalMessage: "optionalMessage", user: "user", id: 0, done: "False" }]) 
const { user } = props;

useEffect(() => {

const fetchBokningar = async () => {

let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/booking`, {
     method: 'GET',
     headers: {
    Authorization: `Bearer ${user.token}`
}
});
let bokningar = await response.json();

setBokningar(bokningar)
}

fetchBokningar();
}, [])

const handleDelete = async (id) => {

await fetch(`${process.env.REACT_APP_BASE_URL}/api/booking/${id}`, {
     method: 'DELETE',
    headers: {
    Authorization: `Bearer ${user.token}`
}
})

let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/booking`, {
   headers: {
   Authorization: `Bearer ${user.token}`
}
})
let bokningar = await response.json()

console.log("bokningar", bokningar)

setBoknigar(bokningar)

}

return (
(
<div>
<h2>{bokning.date}</h2>
<p>{bokning.time}</p>
<p>{bokning.optionalMessage}</p>
<p>{bokning.status}</p>
<p>{bokning.cleanerId}</p>
<p>{bokning.appUser}</p>
<p>Avklarad: <input
type="checkbox"
checked={bokning.done}
onChange={() => console.log("To be implemented...")}
/>
</p>
<button onClick={() => handleDelete(todo.id)}>Ta bort todo</button>
</div>
)
)

}

export default Bokningar;
