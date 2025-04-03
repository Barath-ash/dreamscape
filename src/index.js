import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayPage from './DisplayPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Detail from './Details';
import Payment from './Payment Component/Payment';
import Login from './Sign&Login/Login';
import Signup from './Sign&Login/Signup';
import { AuthProvider, useAuth } from './AuthContext'; 
import Logout from './Sign&Login/Logout';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/" />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/dashboard' element={<ProtectedRoute><App /></ProtectedRoute>} />
                <Route path='/main' element={<ProtectedRoute><DisplayPage /></ProtectedRoute>} />
                <Route path='/details' element={<ProtectedRoute><Detail /></ProtectedRoute>} />
                <Route path='/payment' element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);
