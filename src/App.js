import React from 'react'
import Login from './components/login/Login';
import HomePage from './components/pages/HomePage';
import Register from './components/register/RegisterForm';
import Unauthorized from './components/login/Unauthorized';
import LinkPage from './components/pages/LinkPage';
import Admin from './components/admin/Admin';
import RequireAuth from './components/login/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/frontPage/Navbar';

const ROLES = {
  'User': 2001,
  'Admin': 5150
}

function App() {

  return (
    
      <Routes>
        <Route path='/' element={<HomePage />}>

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="homepage" element={<HomePage />} />
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
