import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import styled from 'styled-components';


const Header = styled.h1`
    color: ${props => props.theme.textColored};
    margin: 0;
    margin-top: 20px;
    font-size: 3.5em;
`

const SubHeader = styled.p`
    color: ${props => props.theme.textDark};
    margin-left: 5px;
    margin-top: 5px;
`


class About extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header>About.</Header>
          <SubHeader>I like to work out.</SubHeader>
        </div>
      </div>
    );

  }
}

export default About;
