import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { AnimatedSwitch } from 'react-router-transition';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Router>
        <div>
          <ul className="router">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <hr />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </header>
    </div>
    );
  }
}

export default App;
