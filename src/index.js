import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './components/context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
     <AuthProvider>
        <Routes>
            <Route path= "/" element={ <Homepage />} />
            
        <App />
        </Routes>
     </AuthProvider>
     </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
    
    );