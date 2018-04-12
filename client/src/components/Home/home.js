// Home Page component

import React from 'react';
import "../global.css";
import "./home.css";

const Home = props => {
    
    
    return(
        // content-window is a global css class
        <div className="container content-window">
            <div className="row">
                <div className="col-md-6">
                    {/* Profile picture */}
                    <img id="profile-picture" src={process.env.PUBLIC_URL + "/images/richard.jpg"} alt="Richard's profile" />
                </div>
                <div className="col-md-5 d-flex flex-column justify-content-center">
                    <div className="text-center">Richard Bates</div>
                
                    <div className="text-center">Full Stack Javascript Developer</div>
                    <div className="text-center">
                        <a href="https://github.com/Richwb">
                            <img className="logo-margin" src={process.env.PUBLIC_URL + "/images/GitHub-Mark-64px.png"} alt="github logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/richardwbates/">
                            <img className="text-center" src={process.env.PUBLIC_URL + "/images/In-2C-66px-TM.png"} alt="linkedIn logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;