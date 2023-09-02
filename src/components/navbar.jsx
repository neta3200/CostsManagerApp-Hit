import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar">
            <img src="logo.png" alt="Logo" className="nav-logo" />
            <a className="nav-item" href="/">Dash</a>
            <a className="nav-item" href="/addproduct">Add a product</a>
    </nav>
    );
};

export default Navbar;
