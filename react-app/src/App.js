import React, { Component } from 'react';
import Header from './template/Header.js';
import Aside from './template/Aside.js';
import Section from './template/Section.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Aside/>
        <Section/>
      </div>
    );
  }
}

export default App;
