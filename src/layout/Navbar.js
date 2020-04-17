import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <> 
        <div className="brand-sidebar">
        </div>
        <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ps ps--active-y" data-collapsible="menu-accordion" style={{transform: "translateX(0px)"}} id="slide-out" data-menu="menu-navigation">
            <li className="bold"><a className="waves-effect waves-purple" href='/'><span data-i18n="Home"><h4>Home</h4></span></a></li>
            {
                (props.user) ?
                <>
                    <li className="bold"><a className="waves-effect waves-purple" href="/users"><span data-i18n="Profile"><h4>Profile</h4></span></a></li>
                    <li className="bold"><a className="waves-effect waves-purple" onClick={props.logout}><span data-i18n="Logout"><h4>Logout</h4></span></a></li>
                </>
                :
                <>
                    <li className="bold"><a className="waves-effect waves-purple" href='/login'><span data-i18n="Login"><h4>Login</h4></span></a></li>
                    <li className="bold"><a className="waves-effect waves-purple" href='/register'><span data-i18n="Register"><h4>Register</h4></span></a></li>
                </>
            }
        </ul>
        <div className="navigation-background"></div>
        </>
    )
}

export default withRouter (Navbar);