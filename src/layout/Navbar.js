import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <> 
        <div className="brand-sidebar">
        </div>
        <ul className="sidenav sidenav-fixed">
            <li className="bold"><a className="hoverable waves-effect waves-purple" href='/'><h5>Home</h5></a></li>
            {
                (props.user) ?
                <>
                    <li className="bold"><a className="hoverable waves-effect waves-purple" href="/users"><h5>Profile</h5></a></li>
                    <li className="bold"><a className="hoverable waves-effect waves-purple" onClick={props.logout}><h5>Logout</h5></a></li>
                </>
                :
                <>
                    <li className="bold"><a className="hoverable waves-effect waves-purple" href='/login'><h5>Login</h5></a></li>
                    <li className="bold"><a className="hoverable waves-effect waves-purple" href='/register'><h5>Register</h5></a></li>
                </>
            }
        </ul>
        <div className="navigation-background"></div>
        </>
    )
}

export default withRouter (Navbar);