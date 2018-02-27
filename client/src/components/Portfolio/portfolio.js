// Import react component
import React from 'react';
// import the portfolio.css file found in the portfolio Component folder
import './portfolio.css'
// import the global.css file found in src route
import '../global.css'

const createGrid = () => {
    // Arrays to hold project information so as not to repat the same blocks over code/keep code dry
    const projects=["My Website","Restaurant-PoS","Forum","Hangman","Star Wars RPG"];
    const repoLinks = ["https://github.com/Richwb/mysite", "https://github.com/Richwb/Restaurant-PoS","https://github.com/Richwb/Forum", "https://github.com/Richwb/Hangman-Game","https://github.com/Richwb/Star-Wars-RPG"];
    const projectLinks = ["https://www.richwbates.com","https://mels-diner.herokuapp.com/","https://github.com/Richwb/Forum","https://mmmm-forum.herokuapp.com","https://richwb.github.io/Hangman-Game/","https://richwb.github.io/Star-Wars-RPG/"]
    const description = [
        "The website you are currently viewing",
        "Use Code \"1\" to login. Page will appear broken when you click on the above link. Please refresh the project page again, this is a feature of the hoster, Heroku",
        "A website Forum",
        "Hangman Game",
        "Star Wars card based role playing game"
    ]
    return(
        /* Loops through the projects array and places the information in individual flex boxes 
        along with the relative information from the other arrays based on project array index */
        projects.map((projectName, index) => {
            return (                  
                <div className="p-3">
                    <div className="row content-padding">
                        <div className="col-md-12 ">
                            <div className="row ">
                                <div className="card">
                                    <div className="card-header">
                                        <h4><a href={projectLinks[index]} target="_blank">{projectName}</a></h4>
                                    </div>
                                    <div className="card-body">
                                        <p>{description[index]}</p>
                                        <p>Take a look at what makes it tick: <a href={repoLinks[index]} target="_blank">Github</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    )
}      

const Portfolio = props => {
    return(
        <div className="container content-window text-center">
            <div className="d-flex flex-col justify-content-center my-flex-container flex-wrap">
                {/* Calls the create grid function */}
                {createGrid()}
            </div>
        </div>
    );
}

export default Portfolio;