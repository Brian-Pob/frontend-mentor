import type { Component, ParentComponent, children } from 'solid-js';

import styles from './App.module.css';
import logo from './logo.svg';

const Card: ParentComponent = (props) => {
  return <div class={styles.card}>{props.children}</div>;
};

const App: Component = () => {
  return (
    <Card>
      Improve your front-end skills by building projects Scan the QR code to
      visit Frontend Mentor and take your coding skills to the next level
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </Card>
  );
};

export default App;
