import React from 'react';
import './LoginContainer.css';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const LoginContainer = () => {
    return (
        <>
        <div id="login-container">
            <Login />
        </div>
        <div id="register-container">
            <Register />
        </div>
        </>
    );
};

export default LoginContainer;