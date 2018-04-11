import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid #ccc;
`;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 3rem;
  border: none;
  text-align: center;
`;

const Logo = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    margin: auto;
    vertical-align: middle;
  }
`;

const Brand = styled.h1`
  font-family: ${props => props.theme.fonts.pts};
  font-weight: ${props => props.theme.fonts.bold};
  font-size: 1.75rem;
  line-height: calc(1.75 * 1.414rem);
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>
            {/* <img src="" alt="" /> */}
            <Brand>Drag N Drop</Brand>
          </Logo>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
