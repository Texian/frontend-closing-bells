import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <> 
        <div className="brand-sidebar">
            <h1 className="logo-wrapper">Closing Bells</h1>
        </div>
        <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ps ps--active-y" data-collapsible="menu-accordion" style={{transform: "translateX(0px);"}} id="slide-out" data-menu="menu-navigation">
            <li className="bold"><a className="waves-effect waves-cyan" href='/'><span data-i18n="Home">Home</span></a></li>
            {
                (props.user)
                ?<>
                    <li className="bold"><a className="waves-effect waves-cyan" href="/users"><span data-i18n="Profile">Profile</span></a></li>
                    <li className="bold"><a className="waves-effect waves-cyan" onClick={props.logout}><span data-i18n="Logout">Logout</span></a></li>
                </>
                :<>
                    <li className="bold"><a className="waves-effect waves-cyan" href='/login'><span data-i18n="Login">Login</span></a></li>
                    <li className="bold"><a className="waves-effect waves-cyan" href='/register'><span data-i18n="Register">Register</span></a></li>
                </>
            }
        </ul>
        <div className="navigation-background"></div>
        </>
    )
}

export default withRouter (Navbar);