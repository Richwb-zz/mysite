// About me page

import React from 'react';
import {Link } from 'react-router-dom';
import "../global.css";

const About = props => {
    return(
        // content-window is a global css class
        <div className="container content-window">
            <div className="row">
                <div className="col-md-12">
                    <p>
                        Richard is a IT professional with two and a half years experiance in the telecommuncations industry.     
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
                    <h2>Where Next?</h2>
                        <h3>1-2 Years</h3>
                            <p>Full Stack Javascript devloper eating, drinking, dreaming in code. </p>
                        <h3>3-5 Years</h3>
                            <p>Mid level developer skilled in web and mobile development</p>
                        <h3>6-10 Years</h3>
                            <p>Senior developer working on large scale applications in a large market</p>
                        <h3>10+ Years</h3>
                            <p>Remotely working on a beach in the caribbean</p>
                </div>
            </div>
        </div>
    )
}

export default About;