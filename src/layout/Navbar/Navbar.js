import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


// signOut = () => {
//     auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//     console.log('User signed out.');
//     });
// }

const Navbar = (props) => {
    return (
        <>
        <div id="navbar">
            {
                (props.user)
                ?<div className="nav">
                    <a href="/">Home</a>
                    <a href='/users '>Profile</a>
                    <a onClick={props.logout}>Logout</a>
                    {/* <a onClick="signOut();">Logout</a> */}
                </div>
                :<div className="nav">
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>
            }
        </div>
        </>
    )
}

export default Navbar;