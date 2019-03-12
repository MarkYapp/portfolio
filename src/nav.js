import React from 'react';

import './nav.css';

export default class Nav extends React.Component {
  onClick() {
    console.log('onClick fired');
    window.moveTo(0, 0);
  }
  render() {
    return (
      <div>
        <header>
          <h1 className="header">Mark Yapp</h1>
        </header>
        <nav>
          <a href="#about">
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
