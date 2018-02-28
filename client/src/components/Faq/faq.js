import React from 'react';
import '../global.css'

const FAQ = props => {
    return (

        <div className="container content-window">
            <a data-toggle="collapse" href="#faq-future" role="button" aria-expanded="false" aria-controls="faq-future">
                <h5>Where do you see yourself...?</h5>
            </a>
            <div id="faq-future" className="collapse">
                <div className="card card-body">
                    <p className="font-weight-bold">1-2 Years</p>
                        <p>Full Stack Javascript developer eating, drinking, dreaming in code. </p>
                    <p className="font-weight-bold">3-5 Years</p>
                        <p>Mid level developer skilled in web and mobile development</p>
                    <p className="font-weight-bold">6-10 Years</p>
                        <p>Senior developer working on large scale applications in a large market</p>
                    <p className="font-weight-bold">10+ Years</p>
                        <p>Remotely working on a beach in the caribbean</p>
                </div>
            </div>
        
            <a data-toggle="collapse" href="#faq-strength" role="button" aria-expanded="false" aria-controls="faq-strength">
                <h5>Greatest Strength?</h5>
            </a>

            <div id="faq-strength" className="collapse">
                <div className="card card-body">
                    <ol>
                        <li>My love for what I do gives me the ability to push myself to learn, grow, adapt and overcome any challenges</li>
                        <li>
                            <span className="font-weight-bold">Attention to detail: </span>
                                 As a developer, it is my responsibility to ensure that my code is bug free, syntactically correct, errors are being handled, and that the page is secure
                        </li>
                        <li>
                            <span className="font-weight-bold">Happy Demeanor: </span>
                             I pride myself on always being happy, pleasent, and respectful. There is no point in being angry, it doesn't do anyone any good.
                        </li>
                        <li>
                            <span className="font-weight-bold">Admitting when I'm lost: </span>
                             Rather then stewing on an issue for days with no results I openly admit it and seek assistance.
                            
                        </li>
                    </ol>
                </div>
            </div>
            <a data-toggle="collapse" href="#faq-weakness" role="button" aria-expanded="false" aria-controls="faq-weakness">
                <h5>Greatest Weakness?</h5>
            </a>

            <div id="faq-weakness" className="collapse">
                <div className="card card-body">
                    Remembering, anything I won't be working on immediately I write down to ensure it gets done. Names and faces can also take me awhile.
                </div>
            </div>
            <a data-toggle="collapse" href="#faq-conflict" role="button" aria-expanded="false" aria-controls="faq-conflect">
                <h5>Tell me a time when you had a conflict with a co-worker.</h5>
            </a>

            <div id="faq-conflict" className="collapse">
                <div className="card card-body">
                    I have always gotten along with my co-workers and so have never had to face this problem, thankfully. But, If I did:
                    <ol>
                        <li>Have a civil conversation with the co-worker to see where the issue between us lies then work on a way to improve the situation</li>
                        <li>If conversation fails and a mutual ground cannot be found agree to disagree and see if the situation can defused by moving foward</li>
                        <li>if the conflict keeps arising bring the situation to the attention of my manager, explaining that we have attempted to correct the current standing but to no avail</li>
                    </ol>
                </div>
            </div>
        </div>

    );
}

export default FAQ;