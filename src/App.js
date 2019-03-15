import React, { Component } from 'react';
import Nav from './nav';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
