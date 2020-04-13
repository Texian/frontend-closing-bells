import React from 'react';
import './LoginContainer.css';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const LoginContainer = (props) => {
    return (
        <div className="container">
            <div className="col s12 m4 l3">
            </div>
            <div id="login-page" className="column">
                <div className="col s12 m4 l3 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                    <Login login={props.login} logout={props.logout} />
                </div>
            </div>
            <div id="register-page" className="column"> 
                <div className="col s12 m4 l3 offset-8 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                    <Register />
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;