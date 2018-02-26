import React from 'react';
import './portfolio.css'
import '../global.css'

const createGrid = () => {
    const projects=["My Website","Restaurant-PoS","Forum","Hangman","Star Wars RPG"];
    const repoLinks = ["https://github.com/Richwb/mysite", "https://github.com/Richwb/Restaurant-PoS","https://github.com/Richwb/Forum", "https://github.com/Richwb/Hangman-Game","https://github.com/Richwb/Star-Wars-RPG"];
    const projectLinks = ["https://www.richwbates.com","https://mels-diner.herokuapp.com/","https://github.com/Richwb/Forum","https://mmmm-forum.herokuapp.com","https://richwb.github.io/Hangman-Game/","https://richwb.github.io/Star-Wars-RPG/"]
    
    return(
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
                {createGrid()}
            </div>
        </div>
    );
}

export default Portfolio;