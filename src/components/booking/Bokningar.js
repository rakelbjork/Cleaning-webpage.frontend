import { useEffect, useState } from "react"; 
import Bokning from './Bokning';
import './Booking.css';

const Bokningar = (props) => {

const [ bokningar, setBokningar] = useState([{time: "time", date: "date", optionalMessage: "optionalMessage", user: "user", id: 0, done: "False" }]) 
const { user } = props;

useEffect(() => {
   var activeUser = localStorage.getItem("loggedInUser");
   var parsedUser = JSON.parse(activeUser);
   var userToken = parsedUser.token;

const fetchBokningar = async () => {

let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/booking`, {
     method: 'GET',
     headers: {
    Authorization: `Bearer ${userToken}`
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
    Authorization: `Bearer ${userToken}`
}
})

let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/booking`, {
   headers: {
   Authorization: `Bearer ${userToken}`
}
})
let bookings = await response.json()

setBokningar(bookings)

}

return (
    <div className="bokning">
    {bokningar.map(
        bokning => <Bokning 
        key={bokning.id} 
        bokning={bokning} 
        setBokningar={setBokningar} /> )}
</div>

)

}

export default Bokningar;
