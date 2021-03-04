/// 
/// Author: Will Murphy  
///
import React from 'react' 

import Python from '../images/icons/python.png'
import Matlab from '../images/icons/matlab.png'
import Cplusplus from '../images/icons/c++.png'
import JavaScript from '../images/icons/js.png'
import Java from '../images/icons/java.png'
import C from '../images/icons/c.png'

import Project from './Project.js'

{/* 
    #TODO: Update this to split projects into folders by language 
*/}
 

const Projects = () => (
    <span> 
        <p>
            Here are some of my programming projects categorized by language (order: Python,
            Matlab, JavaScript, Java, C++, C). The source code is linked for projects that I can share.
        </p>
        <div className="projects-container"> 

            {/* PYTHON */}
            <Project
                iconSrc={Python}
                name="Address Data Microservice"
                descr="Microservice built to use third party API's interchangably to augment
                                   stream and batch address data with validation, geo-coding and 
                                   standardization."
                link="https://github.com/Will-Murphy/dp-address-project">
            </Project>
            <Project
                iconSrc={Python}
                name="Steganography"
                descr="Command line  tool to for embedding and extraction of  secret images  
                                    in a specified number of least significant bits of cover images."
                link="https://github.com/Will-Murphy/TCP-port-scan-detector">
            </Project>
            <Project
                iconSrc={Python}
                name="Port Scan Detector"
                descr="Tool that allows users to detect potential port scan attackers by analyzing 
                                network traffic files and comparing the ratio of different types of TCP 
                                handshake flags against each other."
                link="https://github.com/Will-Murphy/TCP-port-scan-detector">
            </Project>
            <Project
                iconSrc={Python}
                name="Information Gain Decision Tree Classifier "
                descr="Project that uses information gain to select features from data that are most 
                predictive of target feature. Implemented system to prevent overfitting and 
                acheived predictive accuracy of %93 on predicting which a party a member of 
                congress was from their voting data.">
            </Project>
            <Project
                iconSrc={Python}
                name="Machine Learning Component - Orchard Watch"
                descr="Configured, built and deployed simple server running on an AWS EC2 compute 
                instance to process and serve machine learning classifications on images uploaded 
                to AWS S3 bucket from  main web application."
                link="https://github.com/Will-Murphy/dp-address-project">
            </Project>
            <Project
                iconSrc={Python}
                name="Connect Four AI Bot "
                descr="Simulated a two player Connect Four game. Implemented two
                artificially intelligent adversarial agents that used depth limited versions
                of the minimax/alpha-beta pruning algorithms and a heuristic function to choose 
                their moves in order to beat opponents.">
            </Project>

            {/* TODO: Make rest of projects using Project component*/}
            {/* MATLAB */}
            <Project
                link="https://github.com/Will-Murphy/rocket-simulation"
                descr="Basic simulation and graphical representation of a rocket's 
                net forces and trajectory throughout launch."
                iconSrc={Matlab}
                name="Rocket simulation"
            >
            </Project>
            <Project
                link="https://github.com/Will-Murphy/self-driving-car"
                descr="Simulation of a 4 way intersection using Matlab, and including an algorithm 
                to optimize vehicle propulsion in order to reduce crash rate by 75% while 
                minimizing fuel consumption."
                iconSrc={Matlab}
                name="Self-Driving Car Simulation  "
            >
            </Project>
        
            {/*JAVASCRIPT*/}
            <Project
                descr="A collection of query functions following the Fluent 
                composition design pattern, allowing for complex yet efficient queries 
                on large sets of JSON Yelp restaurant data."
                iconSrc={JavaScript}
                name="JSON Yelp Query Tool"
            >
            </Project>
            <Project
                name="Stable Matching Oracle"
                iconSrc={JavaScript}
                descr="A test suite that ensures an instance of the stable matching 
                problem is well-formed,valid, and if it is in fact stable or not."
            >
            </Project>
            <Project
                descr="Simulated navigation of an automated robot through a 2D maze until it reaches 
                goal location using rapidly expanding random trees, with heuristic 
                values ranging from completely random to perfect knowledge. "
                iconSrc={JavaScript}
                name=" Robot RRT Navigation"
            >
            </Project>

            {/* JAVA */}
            <Project
                descr="Mock Library infrastructure supporting sorting, searching, adding and removing 
                over a range of different media sub classes such as books and movies." 
                iconSrc={Java}
                name="General Media Library"
            >
            </Project>
           
            {/* C++ */}
            <Project
                name="CPU Scheduling Simulator"
                iconSrc={Cplusplus}
                descr="Given a list of computational jobs and their start, finish and duration times, 
                uses various CPU scheduling algorithms(LIFO, FIFO, CTCF, PQ, SRT) to determine the order in which 
                to proccess jobs and outputs metrics from each respective algo."
            >
            </Project>
            <Project
                name="Thread Safe Data Structures"
                iconSrc={Cplusplus}
                descr="Use pthread multithreading library and mutexs/locks to implement 
                thread safe bounded bufffer with as many as 
                20 producer and consumer threads trying to access it simltaneously."
            >
            </Project>
            <Project
                name="File System Simulator"
                iconSrc={Cplusplus}
                descr="File system simulator that reads and writes to a 128KB simulated disk 
                using file pointers as well simulated file inode and superblock metadata
                to determine the systems state and operate on it in accordance with user commands. "
            >
            </Project>

            {/* C */}
            <Project
                name="Network Arithmetic Bot"
                iconSrc={C}
                descr="Established client-server connection using Socket API and TCP, and 
                designed an interactive program to solve a series of consecutive 
                problems sent from server until  “flag” was retrieved."
   
            >
            </Project>
            <Project
                name="Memory Manager"
                iconSrc={C}
                descr="Wrote a suite of functions to allocate, free and track memory by manually 
                implementing memory pointers, free lists, memory coalescing and other techniques 
                that modern computers use to manage memory."
            >
            </Project>
            <Project
                name="Bank Simulator"
                iconSrc={C}
                descr="Simulated basic functionality of a bank/ATM interaction system using 
                using atomic transactions to avoid race conditions."
            >
            </Project>

        </div>
    </span>
)

export default Projects
