/// 
/// Author: Will Murphy 
///
import React from 'react'
import PropTypes from 'prop-types'


const Resume = props => (
    <div className = "resume"> 

        <h3 > Technical Skills: </h3>
            <h5> Programming Languages:</h5>
            <p> Python, TypeScript, JavaScript, SQL, HTML, CSS, C++, C, Matlab, Java</p>
            <h5> Tools:</h5>
            <p> Linux, Git, Bash, Docker, CMD, postgreSQL </p>
            <h5> Frameworks:</h5>
            <p> Angular, Django, NodeJS, Flask, ExpressJS, ReactJS, GatsbyJS </p>

        <hr></hr>

        <h3 > Work Experience: </h3>
        <ul>
            <h5> Software Engineer @ 
                    <a href ="https://decisionpointhealth.com">Decision Point Healthcare Solutions</a> 
                    <span></span>, May 2020 - Present
            </h5>
        </ul>
        <ul> <h5> Software Engineering Intern @ 
                <a href ="https://decisionpointhealth.com">Decision Point Healthcare Solutions</a> 
                  <span></span>, May-Sep 2019 
            </h5>
            <li> 
                Built frontend components, logic, and styling to improve functionality and 
                usability of both internal and customer facing applications using Angular, 
                HTML,  and CSS 
            </li>
            <li> 
                Developed RESTful backend Python code using Flask and SQLAlchemy in order to query
                and update internal postgreSQL database in response to application needs/actions
            </li>
            <li> 
                Redesigned querying/ loading of data in internal data management dashboard to 
                notably increase performance

            </li>
            <li> 
                Created responsive UI components and webpages for public facing company website 
                using GatsbyJS technologies
            </li>
            <li> 
                Served as member of product development team using Agile methodology, Git source 
                control and Jira project  management software
            </li>    
        </ul>

        <hr></hr>

        <h3> Education: </h3>
        <h5> 
            B.S. Computer Science and Mathematics @ UMASS Amherst, 
            May 2020
        </h5>
        <ul>  
            <li>Bay State Computer Science Scholar </li>
            <li>7X Deans List </li>
            <li>Cum Laude Honors </li>
            <li>3.77 GPA</li>
            <li>Honors College </li>
        </ul>
        <h5>Computer Science Courses:</h5>
        <ul>  
            <li> Algorithms</li>
            <li> Data Structures </li>
            <li> Software Engineering</li>
            <li> Network and Cyber Security </li>
            <li> Artificial Intelligence </li>
            <li> Operating Systems </li>
            <li> Reasoning Under Uncertainty </li>
            <li> Formal Language Theory</li>
            <li> Programming Methodology</li>
            <li> Software Entrepreneurship</li>
            <li> Social Issues in Computing</li>
        </ul>
        <h5> Math Courses:</h5>
        <ul> 
            <li> Differential Equations</li>
            <li> Abstract Algebra</li>
            <li> Linear Algebra </li>
            <li> Statistics I & II </li>
            <li> Calculus I & II</li>
            <li> Mulitvariate Calculus</li>
            <li> Scientific Computing</li>
        </ul>
        <h5> Other Courses: </h5>
        <ul> 
            <li> Physics I & II</li>
            <li> Chemistry </li>
            <li> Material Science </li>
            <li> Thermodynamics </li>
            <li> Philosophy</li>
            <li> Psychology</li>
            <li> Middle Eastern History</li>
            <li> Human Evolution</li>
        </ul>

        <hr></hr>

        <h3 > Leadership Experience: </h3>
        <ul> <h5> Trip Student Leader and Coordinator @ Cuba Service Trip, Jul 2017</h5>
            <li> 
            Served as student leader and assisted in planning of the first American trip to Manzanillo, 
            Cuba since 1956. 
            </li> 
            <li> 
            Assisted in founding a self-sustaining sports/rec. camp for the city’s youth & established a daily 
            attendance of 100+ local children
            </li> 
        </ul>
        <ul> <h5> Service Counter Manager @ Grand Slam Deli, Summers 2015-2018 </h5>
            <li> 
                Managed service counter and cashier stations and personnel
            </li> 
            <li> 
                Oversaw food prep and delivery
            </li> 
            <li> 
                Trained new employees
            </li> 
        </ul>
            
        <hr></hr>

        <h3> Projects: </h3>
        <p> see some of my projects
            <a style={{cursor:'pointer'}} 
               onClick={() => {props.onChangeArticle('projects')}}> here
            </a>
        </p >

    </div>
)

Resume.propTypes = {
    onChangeArticle: PropTypes.func
}
  
export default Resume
