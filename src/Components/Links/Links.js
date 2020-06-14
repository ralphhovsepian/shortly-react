import React, { Component } from 'react';
import './Links.css';
export class Links extends Component {
  render() {
    const { link } = this.props;
    return (
      <div className='links'>
        <div className='left'>
          <p>{link.url}</p>
        </div>
        <div className='right'>
          <p className='shortlink'>https://rel.ink/{link.hashid}</p>
        </div>
      </div>
    );
  }
}
