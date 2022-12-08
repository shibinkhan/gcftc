import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div id="header_main" className='d-flex justify-content-center align-items-center'>
            <div id="header" className='container row d-flex justify-content-between px-0'>
                <div className='col-sm-6'>
                    <h2>GCFTC</h2>
                </div>
                <div className='col-sm-6' id="nav_main">
                    <Link className="nav_links" to="/">Home</Link>
                    <Link className="nav_links" to="/">Services</Link>
                    <Link className="nav_links" to="/">Trainers</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;