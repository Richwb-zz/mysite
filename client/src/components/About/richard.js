// Import React component
import React from 'react';
/* Import the link react-router-dom.
   Is used for react router to direct to the correct component to display */
import {Link } from 'react-router-dom';
// import the global.css file found in src route
import "../global.css";

const About = props => {
    return(
        <div className="container content-window">
            <div className="row">
                <div className="col-md-12">
                    <p>
                        Richard is an IT professional with two and a half years experiance in the telecommuncations industry.     
                    </p>
                    <p>
                        Being able to assist or educate others has always been his driving force to excel in his fields of work.
                        It has motivated him to learn, study, and ask questions in order to see the big picture as well as the smallest of details.
                        He has always carried with him the love of technology being that he has grown up along side the digital age with his first 486 
                        going back as far as he can recall.
                    </p>
                    <p>
                        Coding was always a hobby that would be revisted time and time again until more recently when the decision was made to put his
                        abilities to practice. His previous knowledge of PhP, HTML, and CSS excellerated his learning as he quickly picked up front and backend 
                        Javascript technologies of Node and React.
                    </p>
                    <p>
                        Now, with his new abilities in hand, he is looking to take on the world of development and learn, study, teach.
                    </p>
                    <p>
                        I'm sure you have more questions. Head on over to the <Link to="/faq">FAQ</Link> or the <Link to="/contact">contact form</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;