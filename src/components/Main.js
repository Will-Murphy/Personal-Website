import PropTypes from 'prop-types'
import React from 'react'
import Resume from './Resume.js'
import Projects from './Projects.js'
import UMASS from '../images/UMASS.jpg'
import sunset from '../images/sunset.jpg'
import macbook from '../images/macbook.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

      {/* #TODO: update article id and props variable names to what they display */}
        <article
          id="intro"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={sunset} alt="" />
          </span>
          {/* #TODO: Change this, include more about software/building cool products */}
          <p>
            Hi, my name is Will! I am a senior at UMASS Amherst pursuing a career in software 
            engineering. Building software is my passion, but I'm also interested in finance 
            and entrepreneurship.
          </p>
          <p>Thanks for checking out my site!</p>
          {close}
        </article>
        
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <h2 className="major">Resume</h2>

        <Resume></Resume>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">projects</h2>
        
          <Projects></Projects>
  
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={UMASS} alt="" />
          </span>
          <p> 
            Please feel free to contact me by email:   
          </p>

          <h4> wmurphy@umass.edu </h4>
          <br></br>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/Will-Murphy"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Will-Murphy"
                className="icon fa-linkedin"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
