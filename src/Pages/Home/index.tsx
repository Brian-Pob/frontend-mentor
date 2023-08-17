import { A } from '@solidjs/router';
import styles from './Home.module.css';
import logo from './logo.svg';
import { Challenge } from '../../../types';
import ChallengeCard from '../../components/ChallengeCard';
import { For } from 'solid-js';

// const challenges = [
const challenges: Challenge[] = [
  {
    name: 'Order Summary Component',
    path: '/Challenges/OrderSummaryComponent',
    description:
      'A simple order summary component. Using CSS Modules with SCSS for styling. I also implemented a nice button animation using CSS transitions.',
    tags: ['SolidJS', 'CSS Modules', 'SCSS', 'CSS Transitions'],
    repoUrl:
      'https://github.com/Brian-Pob/frontend-mentor/tree/production/src/Challenges/OrderSummaryComponent',
    fmUrl:
      'https://www.frontendmentor.io/solutions/order-summary-using-solid-js-css-modules-flexbox-and-grid-0Ep-Bzrb4U',
    imgSlug: 'order-summary',
  },
  {
    name: 'QR Code Component',
    path: '/Challenges/QRCodeComponent',
    description:
      'A QR code component that generates a QR code based on the inputted text. Using CSS Modules with for styling.',
    tags: ['SolidJS', 'CSS Modules', 'QR Code'],
    repoUrl:
      'https://github.com/Brian-Pob/frontend-mentor/tree/production/src/Challenges/QRCodeComponent',
    fmUrl:
      'https://www.frontendmentor.io/solutions/qr-code-using-grid-css-modules-and-solid-js-ViLtifUg5c',
    imgSlug: 'qr-code',
  },
];

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
            <For each={challenges}>{(challenge) => <ChallengeCard {...challenge} />}</For>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
