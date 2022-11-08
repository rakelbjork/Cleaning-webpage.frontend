import React from 'react'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Unauthorized from './components/Unauthorized';
import LinkPage from './components/LinkPage';
import Admin from './components/Admin.js';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';


const ROLES = {
  'User': 2001,
  'Admin': 5150
}

function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="home" element={<Home />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

      <Route path="*" element={<Missing />} />

      </Route>
      </Routes>
  );
}

export default App;
