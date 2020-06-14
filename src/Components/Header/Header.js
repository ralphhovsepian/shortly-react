import React, { Component } from 'react';
import './Header.css';
import illustration from '../styles/illustration-working.svg';
export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-left'>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get started</button>
        </div>
        <div className='header-right'>
          <img src={illustration} />
        </div>
      </div>
    );
  }
}
