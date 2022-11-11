import React from 'react';
import { Outlet, Link } from "react-router-dom";

const FelSida = () => {
    return(
        <div className="App">
            <h1>404 - Sidan du söker finns inte. <Link to="/Hem">Gå till startsidan</Link></h1>

	</div>
    )
}

export default FelSida;