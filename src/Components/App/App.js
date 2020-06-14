import React from 'react';
import './App.css';
import { Nav } from '../Nav/Nav';
import { Header } from '../Header/Header';
import { Detail } from '../Detail/Detail';
import { Footer } from '../Footer/Footer';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      link: [],
    };
  }

  getLink = () => {
    const input = document.querySelector('.input');
    if (this.state.currentValue !== '') {
      input.style.border = '0';
      return fetch('https://rel.ink/api/links/', {
        method: 'POST',
        body: JSON.stringify({
          url: this.state.currentValue,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            link: this.state.link.concat(data),
            currentValue: '',
          })
        );
    } else {
      input.style.border = '3px solid red';
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ currentValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Detail
          getLink={this.getLink}
          onChange={this.handleChange}
          currentValue={this.state.currentValue}
          link={this.state.link}
        />
        <Footer />
      </div>
    );
  }
}
