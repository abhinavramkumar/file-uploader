import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 275px;
  border-radius: 5px;
  border: 5px dashed #ccc;
`;

const DropContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  flex-basis: calc(100% - 2rem);
`;

class FileDrop extends Component {
  state = {
    files: []
  };

  onFileSelected = e => {
    console.log("----- e.currentTarget.file -----");
    console.log(e.currentTarget.file);
    console.log("---------------");
  };

  onFileDrop = e => {
    console.log("----- onFileDrop -----");
    console.log(e);
    console.log("---------------");
  };

  render() {
    return (
      <Wrapper>
        <DropContainer onDrop={this.onFileDrop}>
          <Message>
            <h2>Drop your Files Here</h2>
          </Message>
          <input
            type="file"
            name="file-drop"
            onChange={this.onFileSelected}
            multiple
          />
        </DropContainer>
      </Wrapper>
    );
  }
}

export default FileDrop;
