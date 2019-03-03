import React from 'react';

import './nav.css';

export default function Nav() {
  return (
    <div>
      <header>
        <h1 className="header">Mark Yapp</h1>
      </header>
      <nav>
        <a href="#">Contact</a>
        <a href="#">Bio</a>
        <a href="#">Projects</a>
      </nav>
    </div>
  );
}
