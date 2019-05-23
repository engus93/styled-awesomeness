import React, { Fragment } from "react";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Button danger />
      <Button />
    </Fragment>
  );
};

const Button = ({ danger }) => {
  return (
    <button
      className={danger ? "button button--danger" : "button button--success"}
    >
      Hello
    </button>
  );
};

export default App;
