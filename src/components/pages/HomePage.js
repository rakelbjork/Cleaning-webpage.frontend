import React, { useEffect } from 'react';
import "../pages/homepage.css";
import bannerImage from "../assets/bakgrund1.png";
import { Link } from 'react-router-dom';
import Bokning from '../booking/Bokning';
import './homepage.css';

const HomePage = () => {

    return (
        <div className="home">
          <div className="headerContainer">
            <h1> Välkommen till StädaFint.ab! </h1>
            <p> Boka ny städnig:</p>
            <Link to="/bokning">
              <button> Boka </button>
            </Link>
          </div>
        </div>
      );
   
};

export default HomePage;