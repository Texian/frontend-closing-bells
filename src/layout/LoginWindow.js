import React from 'react';
import Login from '../components/Auth/Login';
import './Login.scss';

const LoginWindow = (props) => {
    return (       
        <div className="row">
            <div id="login-page" className="login-form">
                    <Login login={props.login} logout={props.logout} />
            </div>
        </div>    
    );
};

export default LoginWindow;