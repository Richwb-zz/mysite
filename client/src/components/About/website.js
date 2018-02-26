import React from 'react';
import "../global.css";

const About = props => {
    return(
        // content-window is a global css class
        <div className="container content-window">
            <h3>Goal</h3>
            <p>
                Building this website has been an adventure for me. Learning new technologies, expanding ones I already knew about, and of course 
                obtaining several headaches along the way.</p><p>Coming from a desktop IT background I didn't want to just learn how to make a website but
                also gain knowledge on the systems that it takes to run a website and how to best impliment those system.
            </p>

                <h3>Technology</h3>
                <ul>
                    <li><a href="#aws">Amazon Web Services (AWS)</a></li>
                    <li><a href="#nginx">Nginx</a></li>
                    <li><a href="#ufw">Uncomplicated Fire Wall (UFW)</a></li>
                    <li><a href="#certbot">Certbot</a></li>
                    <li><a href="#node">Node</a></li>
                    <li><a href="#react">React</a></li>
                    <li><a href="#github">Github</a></li>
                    <li><a href="#github">PM2</a></li>
                </ul>
                
                <section>
                    <h3 id="aws">Amazon Web Services (AWS)</h3>
                    <p>
                        The server is running on the Amazon Web Services EC2 platform with a linus distro. An Elastic IP address has been assigned
                        to the server but only to secure a static IP and not for failure handling at this time.
                    </p>
                </section>
                
                <section>
                    <h3 id="nginx">Nginx</h3>
                    <p>I'm using AWS so why not use Elastic Load Balancer (ELB)? The short answer is, Nginx is free while ELB costs $0.0225 per hour or $16 a month minimum.</p>
                    <p>
                        Nginx is running as an http to https redirect as well as a reverse proxy as node is not running as a root process, for security purposes,
                        and therefore cannot bind to 80.
                    </p>
                    <p> 
                        I could have used a proxy plugin for node but I decided against it. Nginix is a commonly used industry system that can provide a wide variety
                        of tools, such as load balancing and error handling, for when I decide to expand my little cornor of the web.
                    </p>
                </section>
               
                <section>
                    <h3 id="ufw">Uncomplicated Fire Wall (UFW)</h3>
                    <p>
                        EC2 does a very good job at port blocking but I figured it couldn't hurt to have a second Firewall program installed directly on the server
                        to handle it also.
                    </p>
                    <h3 id="certbot">Certbot</h3>
                    <p>
                        Can't have https without a security certificate. Certbot handles my SSL certificate by installing it and keeping it up to date.
                    </p>
                    <p>
                        The certificate assigned is a Domain Validated Certificate and therefore only checks my right to use this domain as opposed to validating me personally
                        I may get it upgraded in the future but for now, lets keep it free.
                    </p>
                </section>
                
                <section>
                    <h3 id="node">Node</h3>
                    <p>Node is a JavaScript runtime which handles web calls and processes backend functionality, such as database connections and data processing, of a website.</p>
                    <p>At this time I am not using node as I do not have any backend process to handle, but that will change soon as I intergrate more features.</p>
                </section>
                
                <section>
                    <h3 id="react">React</h3>
                    <p>
                        Single Page Front End Javascript Library. All "pages" on this site are run with React. React frees up processing and memory
                        usage on the web server by preloading all information on the users browser. As a single page Library it uses react-router to
                        load components which then appear to be seperate pages.
                    </p>
                </section>
                
                <section>
                <h3 id="github">Github</h3>
                    <p>
                        Wouldn't be able to code without a code repository. However, for my server I am not using it to save my code but rather
                        pull my code from github to my EC2 instance. the originating code is local where I test prior to pushing to github
                    </p>
                    <p>
                        Why not FTPS? less secure and no version control. With Git I can transfer all my information over without the need to install another package on
                        the web server or open another port.
                    </p>
                </section>
                <section>
                    <h3 id="pm2">PM2</h3>
                        <p>
                            PM2 is a process manage with an extensive range of abilities. The simplist of these is to allow Node and react to run as
                            background processes freeing up the servers abilitiy to process further functions and allow the user unrestricted access
                            rather then freezing the screen when running node.
                        </p>
                </section>
        </div>
    )
};

export default About