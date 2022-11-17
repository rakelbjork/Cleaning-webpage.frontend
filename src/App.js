import React, { useState } from 'react'
import Login from './components/login/Login';

import Register from './components/register/Register';
import Unauthorized from './components/login/Unauthorized';
import LinkPage from './components/pages/LinkPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/frontPage/Navbar';
import './components/frontPage/navBar/Navbar.css';
import HomePage from './components/pages/HomePage';
import MyPage from './components/pages/MyPage';

function App() {

  const Blogs = () => {
    return <h1>BLOGSIDA</h1>
  }

  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
      <BrowserRouter>
   
      {/* <Route component={<Navbar />} /> */}
    
      <Routes>
      <Route path='/' element={<HomePage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
      <Route path='mypage' element={<MyPage loggedInUser={loggedInUser}/>} />
        <Route path='login' element={<Login setLoggedInUser={setLoggedInUser}/>} />
        <Route path='register' element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
  
      </Routes>
      </BrowserRouter>
  );
}

export default App;
