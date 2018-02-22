import React from 'react';
// CSS file only used by the footer component
import "./footer.css";
// CSS file with elements for universal use
import "../global.css";

const Footer = props => {
    return(
        // uses white-font from global.css
        <footer className="white-font">
            {/* bootstrap container */}
            <div className="container">
                {/* Display copyright */}
                Copyright &#169; {(new Date().getFullYear())} Richard Bates
            </div>
        </footer>
    );
}

export default Footer
