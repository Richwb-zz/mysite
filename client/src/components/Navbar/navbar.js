import React from 'react';
import {Link} from 'react-router-dom';
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
                        <div className="dropdown show">
                            <a id="aboutDropDown" className="nav-link dropdown-toggle" href="https://www.richwbates.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <Link to='/about/richard' className="nav-link">Richard</Link>
                                <Link to='/about/website' className="nav-link">Website</Link>
                            </div>
                        </div>
                        <Link to='/faq' className="nav-link">FAQ</Link>
                        <Link to='/portfolio' className="nav-link">Portfolio</Link>
                        <a className="nav-link" href="https://drive.google.com/open?id=14pYYZBYZzmGQGjPut2FTnWN3A7L-k_CI" target="_blank" rel="noopener noreferrer">Resume</a>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default navbar;