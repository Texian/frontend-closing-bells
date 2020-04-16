import React from 'react';
import Login from '../components/Auth/Login';

const LoginWindow = (props) => {
    return (         
        <Login login={props.login} logout={props.logout} />       
    );
};

export default LoginWindow;