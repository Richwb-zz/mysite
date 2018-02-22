import React from 'react';
import {Link } from 'react-router-dom';
// CSS file only used by the navbar component
import './navbar.css';
// CSS file with elements for universal use
import '../global.css'

const navbar = props => {
    return (
        // bootstrap and global css
        <div className="nav-background white-font">
            <div className="container"> 
                <div className="row">
                    {/* Justifies content to the left(start) */}
                    <div className="d-flex justify-content-start col-md-4 my-auto">Richard Bates</div>
                    {/* Justifies content to the right(start) */}
                    {/* Link tags used to create anchor for react router */}
                    <nav className="nav d-flex justify-content-end col-md-8">
                        <Link to='/' className="nav-link active">Home</Link>
                        <Link to='/about' className="nav-link">About</Link>
                        <Link to='/faq' className="nav-link">FAQ</Link>
                        <a className="nav-link">Portfolio</a>
                        <Link to='/resume' className="nav-link">Resume</Link>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default navbar;