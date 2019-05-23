import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const App = () => {
  const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

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

    /* props branch processing css */
    background-color: ${({ danger }) => (danger ? "#e74c3c" : "#2ecc71")};
  `;

  const Anchor = styled(Button.withComponent("a"))`
    text-decoration: none;
  `;

  return (
    <Container>
      <GlobalStyle />
      <Button danger> Hello </Button>
      <Button> Danger </Button>
      <Anchor href="www.google.com">Go to google</Anchor>
    </Container>
  );
};

export default App;
