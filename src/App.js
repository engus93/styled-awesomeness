import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

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
    background-color: ${theme.mainColor};
  `;

  const Card = styled.div`
    background-color: red;
  `;

  const Button = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    background-color: ${({ theme }) => theme.successColor};
  `;

  const Form = () => (
    <Card>
      <Button>Hello</Button>
    </Card>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Form />
      </Container>
    </ThemeProvider>
  );
};

export default App;
