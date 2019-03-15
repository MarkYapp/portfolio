import React from 'react';

import './nav.css';

export default function Nav() {
  return (
    <div>
      <header>
        <h1 className="header">Mark Yapp</h1>
      </header>
      <nav>
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
