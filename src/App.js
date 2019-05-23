import React from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const App = () => {
  const GlobalStyle = createGlobalStyle`
    body {
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

    /* props branch processing CSS */
    background-color: ${({ danger }) => (danger ? "#e74c3c" : "#2ecc71")};
    ${({ danger, rotationTime }) => {
      if (danger) {
        return css`
          animation: ${rotation} ${rotationTime}s linear infinite;
        `;
      }
    }}
  `;

  const Anchor = styled(Button.withComponent("a"))`
    text-decoration: none;
  `;

  // Animation CSS
  const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <Container>
      <GlobalStyle />
      <Button> Hello </Button>
      <Button danger rotationTime={5}>
        {" "}
        Danger{" "}
      </Button>
      <Anchor href="www.google.com">Go to google</Anchor>
    </Container>
  );
};

export default App;
