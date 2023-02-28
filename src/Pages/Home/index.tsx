import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './Home.module.css';
import { A } from '@solidjs/router';

const Home = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <A
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </A>
        <A class={styles.link} href="/OrderSummaryComponent">
          Order Summary Component
        </A>
        <A class={styles.link} href="/QRCodeComponent">
          QR Code Component
        </A>
      </header>
    </div>
  );
};

export default Home;
