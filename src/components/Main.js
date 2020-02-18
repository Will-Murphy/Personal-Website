import PropTypes from 'prop-types'
import React from 'react'
import UMASS from '../images/UMASS.jpg'
import sunset from '../images/sunset.jpg'
import pic03 from '../images/pic03.jpg'

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
            Hi, my name is Will! I am a student at UMASS Amherst pursuing a career in software 
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
          <h2 className="major">School</h2>
          <span className="image main">
            <img src={UMASS} alt="" />
          </span>
          <p>
            I am graduating from UMASS in May 2020 with a B.S. in Computer Science 
            and Mathematics, here's what I've spent my time here doing!
          </p>
          <ul> Academics:
            <li>Bay State Computer Science Scholar </li>
            <li>6 Deans List Awards </li>
            <li>3.76 GPA</li>
            <li>Honors College </li>
          </ul>
          <ul> Computer Science Courses :
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
          <ul> Math Courses :
            <li> Differential Equations</li>
            <li> Abstract Algebra</li>
            <li> Linear Algebra </li>
            <li> Statistics I & II </li>
            <li> Calculus I & II</li>
            <li> Mulitvariate Calculus</li>
            <li> Scientific Computing</li>
          </ul>
          <ul> Other Courses :
            <li> Physics I & II</li>
            <li> Chemistry </li>
            <li> Material Science </li>
            <li> Thermodynamics </li>
            <li> Philosophy</li>
            <li> Psychology</li>
            <li> Middle Eastern History</li>
            <li> Human Evolution</li>
          </ul>

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
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
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
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
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
