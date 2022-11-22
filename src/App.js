import React, { useState } from 'react'
import Login from './components/login/Login';
import Kontakt from './components/pages/Kontakt';
import Register from './components/register/Register';
import Unauthorized from './components/login/Unauthorized';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/frontPage/Navbar';
import './components/frontPage/navBar/Navbar.css';
import HomePage from './components/pages/HomePage';
import MyPage from './components/pages/MyPage';
import Bokning from './components/booking/Bokning';
import MyBookins from './components/booking/MyBookings'
import NoPage from "./components/pages/NoPage";
import Services from './components/booking/Services';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)


  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<HomePage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
          <Route path='login' element={<Login setLoggedInUser={setLoggedInUser}/>} />
          <Route path='register' element={<Register />} />
          <Route path='mypage' element={<MyPage loggedInUser={loggedInUser}/>} />
          <Route path='kontakt' element={<Kontakt />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path='bokning' element={<Bokning loggedInUser={loggedInUser}/>} />
          <Route path='mybookings' element={<MyBookins />} />
          <Route path='services' element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
      </BrowserRouter>
  );
  
}

export default App;
