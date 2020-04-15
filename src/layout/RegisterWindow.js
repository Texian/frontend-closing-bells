import React from 'react';
import Register from '../components/Auth/Register';
import './Login.scss';

const LoginWindow = (props) => {
    console.log(`Login window props: ${props}`)
    return (       
        <div className="row">
            <div id="register-page" className="login-form"> 
                <div>
                    <Register register={props.register}/>
                </div>
            </div>
        </div>    
    );
};

export default LoginWindow;