/// 
/// Author: Will Murphy 
///
import React from 'react'


const Contact = () => (
  <span>
    <p classname="copyright"> Please feel free to contact me by email below, or to connect with me on Github/LinkedIn.</p>
    <form method="post" action="mailto:williammurphy9723@gmail.com">
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
          href="https://github.com/Will-Murphy"
          className="icon fa-github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/will-murphy-5539651a5"
          className="icon fa-linkedin"
        >
          <span className="label">linkedIn</span>
        </a>
      </li>
    </ul>
  </span> 
)

export default Contact