import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div id="navbar">
            {
                (props.user)
                ?<div className="nav">
                    <button href="/">Home</button>
                    <button href='/users '>Profile</button>
                    <button onClick={props.logout}>Logout</button>
                </div>
                :<div className="nav">
                    <button href='/login'>Login</button>
                    <button href='/register'>Register</button>
                </div>
            }
        </div>
    )
}

export default Navbar;