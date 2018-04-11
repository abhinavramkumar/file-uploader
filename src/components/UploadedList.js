import React, { Component } from "react";
import styled from "styled-components";
import UploadedFile from "./UploadedFile";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  line-height: calc(1.25rem * 1.414);
  font-family: ${props => props.theme.fonts.pts};
  margin: 1rem auto;
  width: 60%;
`;

const List = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100%;
`;

class UploadedList extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Uploaded Files</Title>
        <List>
          {this.props.files.length > 0
            ? this.props.files.map(file => <UploadedFile src={file} />)
            : ""}
        </List>
      </Wrapper>
    );
  }
}

export default UploadedList;
