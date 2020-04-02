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

{/* 
    #TODO: Update this to split projects into folders by language 
*/}
 

const Projects = () => (
    <span> 
        <p>
            Here are some of my programming projects categorized by language (order: Python,
            matlab, JavaScript, Java, C++, C). The source code for any projects which I can share 
            are linked below in their respective blurbs. Otherwise, the project is part of my university 
            coursework, and I can share it privately with anyone interested. 
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
                        Microservice built to use third party API's interchangably to augment
                        stream and batch address data with validation, geo-coding and 
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
                        in a specified number of least significant bits of cover images.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Python} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/TCP-port-scan-detector"> 
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
                       Configured, built and deployed simple server running on an AWS EC2 compute 
                       instance to process and serve machine learning classifications on images uploaded 
                       to AWS S3 bucket from  main web application. 
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Python} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <h3 className = "project-title"> Connect Four AI Bot </h3>
                    <div className = "project-description"> 
                       Simulated a two player Connect Four game. Implemented two
                       artificially intelligent adversarial agents that used depth limited versions
                       of the minimax/alpha-beta pruning algorithms and a heuristic function to choose 
                       their moves in order to beat opponents. 

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
                        Basic simulation and graphical representation of a rocket's 
                        net forces and trajectory throughout launch.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Matlab} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                <a id="project-link"href = "https://github.com/Will-Murphy/self-driving-car"> 
                    <h3 className = "project-title"> Self-Driving Car Simulation  </h3>
                </a>
                    <div className = "project-description"> 
                        Simulation of a 4 way intersection using Matlab, and including an algorithm 
                        to optimize vehicle propulsion in order to reduce crash rate by 75% while 
                        minimizing fuel consumption.
                    </div>
                </div>
            </div>
            
            {/*JAVASCRIPT*/}
            <div className = "project">  
                <img src = {JavaScript} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> JSON Yelp Query Tool  </h3>
                    <div className = "project-description"> 
                        A collection of query functions following the Fluent 
                        composition design pattern, allowing for complex yet efficient queries 
                        on large sets of JSON Yelp restaurant data.
                    </div>
                </div>
            </div>
            
            <div className = "project">  
                <img src = {JavaScript} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Stable Matching Oracle  </h3>
                    <div className = "project-description"> 
                        A test suite that ensures an instance of the stable matching 
                        problem is well-formed,valid, and if it is in fact stable or not.
                    </div>
                </div>
            </div>
            
            <div className = "project">  
                <img src = {JavaScript} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Robot RRT Navigation </h3>
                    <div className = "project-description"> 
                        Simulated navigation of an automated robot through a 2D maze until it reaches 
                        goal location using rapidly expanding random trees, with heuristic 
                        values ranging from completely random to perfect knowledge. 
                    </div>
                </div>
            </div>

            {/* JAVA */}
            <div className = "project">  
                <img src = {Java} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> General Media Library</h3>
                    <div className = "project-description"> 
                       Mock Library infrastructure supporting sorting, searching, adding and removing 
                       over a range of different media sub classes such as books and movies.
                    </div>
                </div>
            </div>
            
            {/* C++ */}
            <div className = "project">  
                <img src = {Cplusplus} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Thread Safe Data Structures </h3>
                    <div className = "project-description"> 
                        Use pthread multithreading library and mutexs/locks to implement 
                        thread safe bounded bufffer with as many as 
                        20 producer and consumer threads trying to access it simltaneously.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Cplusplus} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> File System Simulator</h3>
                    <div className = "project-description"> 
                        File system simulator that reads and writes to a 128KB simulated disk 
                        using file pointers as well simulated file inode and superblock metadata
                        to determine the systems state and operate on it in accordance with user commands. 
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {Cplusplus} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> CPU Scheduling Simulator</h3>
                    <div className = "project-description"> 
                        Given a list of computational jobs and their start, finish and duration times, 
                        uses various CPU scheduling algorithms to determine the order in which 
                        to proccess jobs and outputs metrics from each respective algo.
                    </div>
                </div>
            </div>

            {/* C */}
            <div className = "project">  
                <img src = {C} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Network Arithmetic Bot </h3>
                    <div className = "project-description"> 
                        Established client-server connection using Socket API and TCP, and 
                        designed an interactive program to solve a series of consecutive 
                        problems sent from server until  “flag” was retrieved.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {C} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Memory Manager </h3>
                    <div className = "project-description"> 
                        Wrote a suite of functions to allocate, free and track memory by manually 
                        implementing memory pointers, free lists, memory coalescing and other techniques 
                        that modern computers use to manage memory.
                    </div>
                </div>
            </div>
            <div className = "project">  
                <img src = {C} alt="icon" className = "project-icon"></img>
                <div className = "project-text-wrapper"> 
                    <h3 className = "project-title"> Bank Simulator </h3>
                    <div className = "project-description"> 
                        Simulated basic functionality of a bank/ATM interaction system using 
                        using atomic transactions to avoid race conditions.
                    </div>
                </div>
            </div>
             
            
        </div>
    </span>
)

export default Projects
