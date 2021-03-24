import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import styles from './index.css';

function Body() {
  return <>
    <Header />
    <Main />
  </>
}

function Header() {
  return <div>HEADER</div>
}

function Main() {
  return <main className={styles.foo}>
    <h1>Hello, world!</h1>
  </main>
}

ReactDOM.render(
    <Body />,
    document.querySelector('body')
);
