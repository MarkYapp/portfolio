import React from 'react';

import './nav.css';

export default class Nav extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navbar = document.getElementById('navbar');
    const main = document.getElementById('main');

    // let sticky = navbar.offsetTop;
    const headerHeight = 120;
    if (window.pageYOffset >= headerHeight) {
      navbar.classList.add('sticky');
      main.classList.add('extra-padding');
    } else {
      navbar.classList.remove('sticky');
      main.classList.remove('extra-padding');
    }
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>Mark Yapp</h1>
        </header>
        <nav id="navbar">
          <a href="#profile">
            <button>About Me</button>
          </a>
          <a href="#projects">
            <button>Projects</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </nav>
      </div>
    );
  }
}
