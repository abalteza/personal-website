import React, { Component } from 'react';
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

export default class Home extends Component {
  render() {
    return (
        <div>
          <Header>Developer.</Header>
          <SubHeader>Graduated from UCSC.</SubHeader>
          <p>
            <code>Alexsandrua</code>
          </p>
        </div>

    )
  }
}
