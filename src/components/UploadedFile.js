import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Base64 } from "js-base64";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    height: auto;
    width: calc(33.33% - 4rem);
    margin: 0 1rem 1rem;
    flex-basis: auto;
  }
  img:nth-child(3n + 1) {
    margin-left: 0;
  }
  img:nth-child(3n + 2) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  img:nth-child(3n) {
    margin-right: 0;
  }
`;

class UploadedFile extends Component {
  state = {
    file: ""
  };

  componentWillMount() {
    axios
      .get(`/uploads/${this.props.src}`)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => ({
          file: res.data
        }));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <img src={`data:image/png;base64,${this.state.file}`} />
      </Wrapper>
    );
  }
}

export default UploadedFile;
