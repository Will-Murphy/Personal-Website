/// 
/// Author: Will Murphy  
///
import Python from '../images/icons/python.png'
import Matlab from '../images/icons/matlab.png'
import Cplusplus from '../images/icons/c++.png'
import JavaScript from '../images/icons/js.png'
import Java from '../images/icons/java.png'
import C from '../images/icons/c.png'

import React from 'react'

{/* #TODO: Update this to split projects into folders by language */}
 

const Projects = () => (
    <span> 
        <p>
            Here are some of my programming projects broken up by programming language. 
            Some of them I can't share as they are class projects,  otherwise the blurbs 
            will link to the source code in my github account. 
        </p>
        <div className="projects-container"> 

            {/* PYTHON */}
            <div className = "project">  
                <img src = {Python} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/dp-address-project"> 
                    <h3 className = "project-title"> Address Data Microservice </h3>
                </a>
                    <div className = "project-description"> 
                        Microservice using interchangable third party API's to process 
                        stream and batch address data for validation, geo-coding and 
                        standardization.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Python} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/steganography"> 
                    <h3 className = "project-title"> Steganography</h3>
                </a>
                    <div className = "project-description"> 
                        Command line  tool to for embedding and extraction of  secret images  
                        in a specified number of  least significant bits of cover images.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Python} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/steganography"> 
                    <h3 className = "project-title"> Port Scan Detector</h3>
                </a>
                    <div className = "project-description"> 
                        Tool that allows users to detect potential port scan attackers by analyzing 
                        network traffic files and comparing the ratio of different types of TCP 
                        handshake flags against each other.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Python} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/david-fisher/320-F19-Track-II"> 
                    <h3 className = "project-title"> Machine Learning Component - Orchard Watch </h3>
                </a>
                    <div className = "project-description"> 
                       Configured, built and deployed simple server running on an Amazon T2 Nano compute 
                       instance to process and serve machine learning classifications on images uploaded 
                       to S3 bucket from  main web application. 
                    </div>
                </div>
            </div>

            {/* MATLAB */}
            <div className = "project">  
                <img src = {Matlab} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/rocket-simulation"> 
                    <h3 className = "project-title"> Rocket simulation </h3>
                </a>
                    <div className = "project-description"> 
                        Basic simulation and graphical representation of a rockets 
                        net forces and trajectory throughout launch.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Matlab} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/rocket-simulation"> 
                    <h3 className = "project-title"> Self-Driving Car Simulation  </h3>
                </a>
                    <div className = "project-description"> 
                        simulation of a 4 way intersection using Matlab, and including an algorithm 
                        to optimize vehicle propulsion in order to reduce crash rate by 75% while 
                        minimizing fuel consumption
                    </div>
                </div>
            </div>
            
            {/*JAVASCRIPT*/}
            <div className = "project">  
                <img src = {JavaScript} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> JSON Yelp Query Tool  </h3>
                    <div className = "project-description"> 
                        A collection of query functions with Javascript following the Fluent 
                        composition design pattern, allowing for complex yet efficient queries 
                        on large sets of JSON Yelp restaurant data
                    </div>
                </div>
            </div>
            

            {/* JAVA */}
           

            {/* C++ */}
            

            {/* C */}
            <div className = "project">  
                <img src = {C} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Network Arithmetic Bot </h3>
                    <div className = "project-description"> 
                        Established client-server connection using  Socket API and TCP, and 
                        designed an interactive program to solve a series of consecutive 
                        problems sent from server until  “flag” was retrieved.
                    </div>
                </div>
            </div>
            
        </div>
    </span>
)

/*
Projects.propTypes = {
}
*/

export default Projects
