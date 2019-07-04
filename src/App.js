import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import NavBar from './components/navbar.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Resume from './components/resume.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
