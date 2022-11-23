import React from 'react'
import { Link } from "react-router-dom";
import './homepage.css';

const MyPage = (props) => {

const {loggedInUser} = props

return (

    <div className="home">
      <div className="headerContainer">
      <h1> Välkommen till Mina Sidor!</h1>
      <p> För att boka eller avboka klicka nedan:</p>
      <Link to="/bokningar">
      <button> Bokningar</button>
      </Link>
  
    </div>
</div>

)
}

export default MyPage;
