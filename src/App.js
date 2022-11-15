import React from 'react'
import Login from './components/login/Login';
import HomePage from './components/pages/HomePage';
import Register from './components/register/RegisterForm';
import Unauthorized from './components/login/Unauthorized';
import LinkPage from './components/pages/LinkPage';
import Admin from './components/admin/Admin';
import RequireAuth from './components/login/RequireAuth';
import { Routes, Route } from 'react-router-dom';


const ROLES = {
  'User': 2001,
  'Admin': 5150
}

function App() {

  return (
    <div className='App'>
      <Routes>
        <Navbar />
        <Route path='/' component={<HomePage />}>

        <Route path='Login' component={<Login />} />
        <Route path='Register' component={<Register />} />
        <Route path="Linkpage" component={<LinkPage />} />
        <Route path="Unauthorized" component={<Unauthorized />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="Homepage" component={<HomePage />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="Admin" component={<Admin />} />
        </Route>

      <Route path="*" component={<Missing />} />
      </Route>

  
      </Routes>
      </div>
  );
}

export default App;
