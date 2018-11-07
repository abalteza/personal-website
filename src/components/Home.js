import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    color: ${props => props.theme.textColored};
    margin: 0;
    margin-top: 0px;
    font-size: 3.5em;
`

const SubHeader = styled.p`
    color: ${props => props.theme.textDark};
    margin-left: 0px;
    margin-top: 0px;
`

export default class Home extends Component {
  render() {
    return (
        <div>
          <Header>Alexsandrua </Header>
          <SubHeader>UCSC Alumni
            B.A in Psychology, CS Minor
            </SubHeader>
        </div>

    )
  }
}
