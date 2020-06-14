import React from 'react';
import logo from '../styles/logo.svg';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export class Nav extends React.Component {
  clickHandle = () => {
    const menu = document.querySelector('.navItems');
    if (menu.className === 'navItems') {
      menu.style.display = 'block';
      menu.classList = `${menu.className} open`;
    } else {
      menu.classList = 'navItems';
      menu.style.display = 'none';
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className='nav'>
            <div className='left'>
              <li className='logoimg'>
                <img src={logo} />
              </li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </div>
            <div className='right'>
              <li>Login</li>
              <li className='signup'>Sign up</li>
            </div>
          </ul>
        </nav>
        <nav className='mobileNav'>
          <ul className='nav'>
            <div className='left'>
              <li className='logoimg'>
                <img src={logo} />
              </li>
            </div>
            <div className='right'>
              <li className='menu' onClick={this.clickHandle}>
                <FontAwesomeIcon icon={faBars} />
              </li>
            </div>
          </ul>
        </nav>

        <div className='navItems'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <div className='line'></div>
          <li>Login</li>
          <li className='signup'>Sign up</li>
        </div>
      </React.Fragment>
    );
  }
}
