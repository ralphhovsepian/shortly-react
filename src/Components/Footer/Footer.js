import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import facebook from '../styles/icon-facebook.svg';
import instagram from '../styles/icon-instagram.svg';
import pinterest from '../styles/icon-pinterest.svg';
import twitter from '../styles/icon-twitter.svg';
import './Footer.css';
export class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <img src={logo} />
        </div>
        <div>
          <b>Features</b>
          <p>Link shortening</p>
          <p>Branded links</p>
          <p>Analytics</p>
        </div>
        <div>
          <b>Resources</b>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <b>Company</b>
          <p>About</p>
          <p>Our team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className='social-media'>
          <img src={facebook} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={instagram} />
        </div>
      </footer>
    );
  }
}
