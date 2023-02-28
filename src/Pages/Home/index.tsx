import { A } from '@solidjs/router';
import styles from './Home.module.css';
import logo from './logo.svg';

const Home = () => {
  return (
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
      <A
        class={styles.link}
        href="https://github.com/Brian-Pob/frontend-mentor/tree/master"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub Repo
      </A>
      <A class={styles.link} href="/OrderSummaryComponent">
        Order Summary Component
      </A>
      <A class={styles.link} href="/QRCodeComponent">
        QR Code Component
      </A>
    </header>
  );
};

export default Home;
