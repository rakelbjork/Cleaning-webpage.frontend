import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './components/context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/RegisterForm';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <BrowserRouter>
     <AuthProvider>
     <Routes>
        <Route path='/' element={<HomePage />}>

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="home" element={<HomePage />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

      <Route path="*" element={<Missing />} />

      </Route>
      </Routes>
     </AuthProvider>
     </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
    
    );