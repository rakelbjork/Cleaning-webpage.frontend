import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import SkapaKonto from "./Components/SkapaKonto";
import Tjanster from './Components/Tjanster';
import Kontakt from "./Components/Kontakt";
import FelSida from "./Components/FelSida";
import MinaSidor from "./Components/MinaSidor";
import Hem from "./Components/Hem";
import NavBar from "./Components/Navbar"
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";




function App() {
  return (
    <div className="App">
        <Router>          
        <NavBar />
        <Switch>      
        
        <Route path="/Hem" component={Hem}>
              <Hem />
          </Route>

          <Route path="/tjanster" component={Tjanster}>
              <Tjanster />
          </Route>

          <Route path="/Kontakt" component={Kontakt}>
            <Kontakt />
          </Route>

          <Route path="/MinaSidor" component={MinaSidor}>
            <MinaSidor />
          </Route>

          <Route path="/SkapaKonto" component={SkapaKonto}>
            <SkapaKonto />
          </Route>

       

        </Switch>
    </Router>
    </div>
  );
}

export default App;
