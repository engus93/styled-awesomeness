import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Button danger> Hello </Button>
      <Button> Danger </Button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${({ danger }) => (danger ? "#e74c3c" : "#2ecc71")};
`;
export default App;
