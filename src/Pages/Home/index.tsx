import { A } from '@solidjs/router';
import styles from './Home.module.css';
import logo from './logo.svg';
import { Challenge } from '../../../types';
import ChallengeCard from '../../components/ChallengeCard';
import { For } from 'solid-js';
import { ChallengesList } from '../../Challenges/Challenges';

const Home = () => {
  return (
    <>
      <main class={styles.App}>
        <section>
          <div class={styles.hero}>
            <h1 class={styles.title}>[Work in Progress] Frontend Mentor Challenges</h1>
            <p class={styles.description}>
              A collection of Frontend Mentor challenges that I completed using various tools and
              frameworks.
            </p>
            <div class={styles.links}>
              <A class={styles.link} href="/Challenges">
                View Completed Challenges
              </A>
              <A
                class={styles.link}
                href="https://github.com/Brian-Pob/frontend-mentor/tree/master"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Github Repo
              </A>
            </div>
          </div>
        </section>
        <section class={styles['challenges-section']}>
          <h2 class={styles.subtitle}>Highlighted Challenges</h2>
          <div class={styles['challenge-list']}>
            <For each={ChallengesList.slice(0, 3)}>
              {(challenge) => <ChallengeCard {...challenge} />}
            </For>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
