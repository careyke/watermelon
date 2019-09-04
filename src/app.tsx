import React from "react";
import ReactDOM from "react-dom";
import {Button,FlexPanel} from './components'
import styles from './app.less';

const appDom = document.querySelector("#app");
ReactDOM.render(<App />, appDom)

function App(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Button>Default</Button>
      <Button type='primary'>Default</Button>
      <Button icon='search' type='warning'>Default</Button>
      <Button type='danger'>Default</Button>
      <Button icon='check' buttonStyle='text-icon' type='success'>Default</Button>
      <Button shape='circle' icon='search' type='success'></Button>
      <Button type='danger' shape='round'>Default</Button>
    </div>
  );
}
