import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Designer } from './platforms'

const App: FC = () => {
  return <Designer />;
}

const appDom = document.querySelector("#app");
ReactDOM.render(<App />, appDom);

