import React, { Component } from "react";
import styled from "styled-components";
import File from "./File";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

const List = styled.div`
  width: 60%;
  height: 100%;
  margin: 1rem auto;
  div:nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.greyLight};
    border: ${props => `1px solid ${props.theme.colors.greyLight}`};
  }
  div:nth-child(2n) {
    background-color: ${props => props.theme.colors.greyLighter};
    border: ${props => `1px solid ${props.theme.colors.greyLighter}`};
  }
`;

class FilesList extends Component {
  render() {
    return (
      <Wrapper>
        <List>
          {this.props.files.length > 0
            ? this.props.files.map((file, index) => (
                <File file={file} key={index} />
              ))
            : "No files Selected !"}
        </List>
      </Wrapper>
    );
  }
}

export default FilesList;
