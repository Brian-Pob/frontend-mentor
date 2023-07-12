import { A } from '@solidjs/router';
import styles from './Home.module.css';
import logo from './logo.svg';

const Home = () => {
  return (
    <main class={styles.App}>
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
      <A class={styles.link} href="/Challenges">
        Completed Challenges
      </A>
      Hello David
    </main>
  );
};

export default Home;
