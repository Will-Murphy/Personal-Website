import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright"> 
            &copy;Will Murphy 2021. 
            Built with <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and <a href="https://html5up.net">HTML5 UP. </a>
            <span>Photo by <a href="https://unsplash.com/@dsc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Davide Colonna. </a> </span>
        </p>
         
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
