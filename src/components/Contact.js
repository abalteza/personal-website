import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

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

class Contact extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Header>Contact Me.</Header>
        <SubHeader></SubHeader>
        <ul>
        <li><SocialIcon url="http://linkedin.com/" /></li>
        <li><SocialIcon url="http://facebook.com/" /></li>        
        </ul>
      </div>
      </div>
    );
  }
}

export default Contact;
