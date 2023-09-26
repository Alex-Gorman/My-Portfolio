import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
        padding: '0 500px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
    };

    const activeLinkStyle = {
        color: 'purple',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    if (mediaQuery.matches) {
        navbarStyle.padding = '0 10px';
    }

    return (
        <nav>
            {/* <ul style={window.innerWidth < 768 ? responsiveNavbarStyle : navbarStyle}> */}
            <ul style={navbarStyle}>
                <li> <Link to="/" style={location.pathname === '/' ? activeLinkStyle : linkStyle}>Home</Link> </li>
                <li> <Link to="/projects" style={location.pathname === '/projects' ? activeLinkStyle : linkStyle}>Projects</Link> </li>
                <li> <Link to="/classes" style={location.pathname === '/classes' ? activeLinkStyle : linkStyle}>Classes</Link> </li>
                {/* <li> <Link to="/about" style={location.pathname === '/about' ? activeLinkStyle : linkStyle}>About Me</Link> </li> */}
                <li> <Link to="/contact" style={location.pathname === '/contact' ? activeLinkStyle : linkStyle}>Contact Me</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;