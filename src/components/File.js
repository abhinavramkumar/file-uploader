import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(1rem * 1.414);
  padding: ${props => props.theme.button.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
`;

const Size = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
`;

const File = ({ file }) => {
  return (
    <Wrapper>
      <Name>{file.name}</Name>
      <Size>{`${file.size / 1000} KB`}</Size>
    </Wrapper>
  );
};

export default File;
