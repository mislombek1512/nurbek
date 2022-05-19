import React, { Component } from 'react';
import Section3 from './components/Section3';
import Footer from './container/footer/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Header from './container/header/Header';
import styled from "styled-components"


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    );
  }
}

export default App;

