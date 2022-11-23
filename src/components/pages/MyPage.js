import React from 'react'
import { Link } from "react-router-dom";
import './homepage.css';

const MyPage = (props) => {

const {loggedInUser} = props

return (

    <div className="home">
      <div className="headerContainer">
      <h1> Välkommen till Mina Sidor!</h1>
      <br /><br />

      <p> Boka ny städning:</p>
            <Link to="/bokning">
              <button> Boka </button>
            </Link>
      <p> För att se dina bokningar eller avboka klicka nedan:</p>
      <Link to="/bokningar">
      <button> Bokningar</button>
      </Link>
  
    </div>
</div>

)
}

export default MyPage;
