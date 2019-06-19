import React from "react";
import ReactDOM from "react-dom";
import { ButtonTest } from './components/button'

const appDom = document.querySelector("#app");
ReactDOM.render(<App />, appDom)

function App(): React.ReactElement {
  return <ButtonTest></ButtonTest>
}
