/// 
/// Author: Will Murphy  
///
import React from 'react'
import PropTypes from 'prop-types'

const Project = props => (
    <div className = "project">  
        <img src = {props.iconSrc} alt="icon" className = "project-icon"></img>
        <div className = "project-text-wrapper"> 
            { props.link
               ? <a style={{cursor:'pointer'}} id="project-link" href = {props.link}> 
                    <h3 className = "project-title"> {props.name}</h3> 
                 </a>
               : <h3 className = "project-title"> {props.name}</h3> 
            }
            <div className = "project-description"> 
                {props.descr}
            </div>
        </div>
    </div>
)

Project.propTypes = {
    iconSrc: PropTypes.string, 
    name: PropTypes.string,
    descr: PropTypes.string,
    link: PropTypes.string
}
  

export default Project