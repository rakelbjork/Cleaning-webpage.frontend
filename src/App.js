import React, { useState } from 'react'
import Login from './components/login/Login';
import Layout from './components/pages/Layout';
import Register from './components/register/Register';
import Unauthorized from './components/login/Unauthorized';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../src/components/frontPage/Navbar';
import './components/frontPage/navBar/Navbar.css';
import HomePage from './components/pages/HomePage';
import MyPage from './components/pages/MyPage';
import Bokning from './components/booking/Bokning';
import MyBookins from './components/booking/MyBookings'

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
      <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path='login' element={<Login setLoggedInUser={setLoggedInUser}/>} />
        <Route path='register' element={<Register />} />
        <Route path='mypage' element={<MyPage loggedInUser={loggedInUser}/>} />
        <Route path='layout' element={<Layout />} />
        <Route path='bokning' element={<Bokning loggedInUser={loggedInUser}/>} />
        <Route path='mybookings' element={<MyBookins />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
