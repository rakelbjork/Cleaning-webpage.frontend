import React, { useEffect } from 'react';
import "../pages/homepage.css";
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <div className="home">
          <div className="headerContainer">
            <h1> Välkommen till StädaFint AB! </h1>
            <br /><br />
            <p> Boka ny städning:</p>
            <Link to="/bokning">
              <button> Boka </button>
            </Link>
          </div>
        </div>
      );
   
}

export default HomePage

