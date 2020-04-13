import React from 'react';
import {Link} from 'react-router-dom';

// signOut = () => {
//     auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//     console.log('User signed out.');
//     });
// }

const Navbar = (props) => {
    return (
        <> 
        <div className="brand-sidebar">
        <a className="brand-logo darken-1" href="/">Home</a>
        </div>
        <ul className="sidenav leftside-navigation sidenav-fixed menu-shadow ps ps--active-y" id="slide-out" data-menu="menu-navigation">
            {
                (props.user)
                ?<>
                    <li><a href='/users '><span data-i18n="Profile">Profile</span></a></li>
                    <li><a onClick={props.logout}><span data-i18n="Logout">Logout</span></a></li>
                    {/* <a onClick="signOut();">Logout</a> */}
                </>
                :<>
                    <li><a href='/login'><span data-i18n="Login">Login</span></a></li>
                    <li><a href='/register'><span data-i18n="Register">Register</span></a></li>
                </>
            }
        </ul>
        </>
    )
}

export default Navbar;