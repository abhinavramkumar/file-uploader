import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Header, FileDrop, FilesList } from "../components";

const Screen = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.pts};
  font-weight: 400;
  line-height: 1.414 * 16px;
`;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled.button`
  padding: ${props => props.theme.button.padding};
  margin: 1rem 0;
  font-family: ${props => props.theme.fonts.pts};
  font-weight: 400;
  font-size: 1rem;
  line-height: ${props => props.theme.button.lineHeight};
  min-width: 50%;
`;

class Home extends Component {
  state = {
    filesToUpload: []
  };

  componentDidMount() {
    window.addEventListener("drop", e => {
      e.preventDefault();
    });
  }

  onReceivedFiles = files => {
    this.setState(prevState => ({
      filesToUpload: files
    }));
  };

  uploadImages = e => {
    e.preventDefault();
    let files = this.state.filesToUpload.map(el => el);
    let data = new FormData();
    // eslint-disable-next-line
    files.map(file => {
      data.append("file-drop", file, file.name);
    });

    if (files.length === 1) {
      axios
        .post("upload", data)
        .then(res => console.log(res))
        .catch(e => console.log(e));
    } else if (files.length > 1) {
      axios
        .post("upload-multiple", data)
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
  };
  render() {
    return (
      <Screen>
        <Header />
        <FileDrop sendPreviewImagesToParent={this.onReceivedFiles} />
        <FilesList
          files={
            this.state.filesToUpload.length > 0 ? this.state.filesToUpload : []
          }
        />
        <Container>
          <UploadButton onClick={this.uploadImages}>Upload Files</UploadButton>
        </Container>
      </Screen>
    );
  }
}

export default Home;
