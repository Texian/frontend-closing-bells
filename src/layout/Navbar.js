import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <> 
        <div className="brand-sidebar">
            <h1>Closing Bells</h1>
        </div>
        <ul className="sidenav leftside-navigation sidenav-fixed menu-shadow ps ps--active-y" id="slide-out" data-menu="menu-navigation">
            <li><a href='/'><span data-i18n="Home">Home</span></a></li>
            {
                (props.user)
                ?<>
                    <li><Link to="/users"><span data-i18n="Profile">Profile</span></Link></li>
                    <li><a onClick={props.logout}><span data-i18n="Logout">Logout</span></a></li>
                </>
                :<>
                    <li><Link to='/login'><span data-i18n="Login">Login</span></Link></li>
                    <li><Link to='/register'><span data-i18n="Register">Register</span></Link></li>
                </>
            }
        </ul>
        <div className="navigation-background"></div>
        </>
    )
}

export default withRouter (Navbar);