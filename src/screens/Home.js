import React, { Component } from "react";
import styled from "styled-components";
import { Header, FileDrop } from "../components";

const Screen = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.pts};
  font-weight: 400;
  line-height: 1.414 * 16px;
`;

class Home extends Component {
  render() {
    return (
      <Screen>
        <Header />
        <FileDrop />
      </Screen>
    );
  }
}

export default Home;
