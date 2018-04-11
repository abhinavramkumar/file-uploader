import React, { Component } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";

const Wrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
  min-height: 275px;
  position: relative;
`;

const Message = styled.div`
  position: absolute;
  width: calc(60% - 2rem);
  z-index: 2;
  top: calc(50% - 2.4745rem);
  left: 0;
  right: 0;
  margin: 0 auto;
  h2 {
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: ${props => props.theme.colors.greyLight};
    text-align: center;
  }
`;

class FileDrop extends Component {
  state = {
    files: []
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState(prevState => ({
      files: [...acceptedFiles]
    }));
    this.props.sendPreviewImagesToParent([
      ...this.state.files,
      ...acceptedFiles
    ]);
  };

  onFilesAccepted = files => {
    console.log("----- Accepted Files Type-----");
    console.log(files.map(file => file.type));
    console.log("---------------");
  };

  onFilesRejected = files => {
    console.log("----- Rejected Files -----");
    console.log(files);
    console.log("---------------");
  };

  render() {
    return (
      <Wrapper>
        <Dropzone
          style={{
            width: "60%",
            margin: "0 auto",
            minHeight: "275px",
            border: "4px dashed #e1e4e8"
          }}
          accept={"image/png" || "image/jpg"}
          onDrop={this.onDrop}
          onDropAccepted={this.onFilesAccepted}
          onDropRejected={this.onFilesRejected}
        />
        <Message>
          <h2>Drag files to Upload OR Click here to Select Files Manually</h2>
        </Message>
      </Wrapper>
    );
  }
}

export default FileDrop;
