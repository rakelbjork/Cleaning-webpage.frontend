import './Booking.css';

const Bokning = (props) => {

    const { bokning, setBokning, user } = props;

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

        setBokning(bokningar)

    }

    return (
        <div className='headerContainer h2'>
            <h2>{bokning.date}</h2>
            <p>{bokning.time}</p>
            <button onClick={() => handleDelete(bokning.id)}>Avboka</button>
        </div>
    )
}

export default Bokning;
