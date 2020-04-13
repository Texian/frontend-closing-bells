import React from 'react';
import './NavbarContainer.css';
import Navbar from '../layout/Navbar/Navbar';

const NavbarContainer = () => {
    return (
        <aside className="sidenav-main nav-expanded nav-lock sidenav-light navbar-full sidenav-active-rounded">
            <Navbar />
        </aside>
    );
};

export default NavbarContainer;