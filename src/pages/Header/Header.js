import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div id="header_main">
            <div id="header">
                <div>
                    <h2>GCFTC</h2>
                </div>
                <div id="nav_main">
                    <Link className="nav_links" to="/Home">Home</Link>
                    <Link className="nav_links" to="/Home">Home</Link>
                    <Link className="nav_links" to="/Home">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;