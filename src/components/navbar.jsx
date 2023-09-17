//Student1: Netanel Iluz ID: 205856354
//Student2: Daniel Dabush ID: 316013671

import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar">
            <img src="/logo.png" alt="Logo" className="nav-logo" />
            <span className="nav-text">Costs Manager</span>
            <a className="nav-item" href="/">Dash</a>
            <a className="nav-item" href="/addproduct">Add a product</a>
    </nav>
    );
};

export default Navbar;
