import { A } from '@solidjs/router';
import { For } from 'solid-js';
import logo from '../../assets/favicon.png';
import styles from './index.module.css';
import { ChallengesList } from '../../Challenges/Challenges';
import ChallengeCard from '../../components/ChallengeCard';

const Challenges = () => {
  return (
    <main class={styles.App}>
      <section class={styles['challenges-section']}>
        <h2 class={styles.subtitle}>All Challenges</h2>
        <div class={styles['challenge-list']}>
          <For each={ChallengesList}>{(challenge) => <ChallengeCard {...challenge} />}</For>
        </div>
      </section>
    </main>
  );
};

export default Challenges;
