// Home Page component

import React from 'react';
import "../global.css";

const Home = props => {
    return(
        // content-window is a global css class
        <div className="container content-window">
            <div className="row">
                <div className="col-md-6">
                    {/* Profile picture */}
                    <img src="" alt="Richard's profile" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            Richard Bates
                        </div>
                        <div className="col-md-12">
                            Full Stack Javascript Developer 
                        </div>
                        <div className="col-md-12">
                            Hello & Welcome! Feel free to take off your shoes and stay awhile.
                        </div>         
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;