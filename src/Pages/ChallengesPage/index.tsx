import { A } from '@solidjs/router';
import { For } from 'solid-js';
import logo from '../../assets/favicon.png';
import styles from './index.module.css';

const Challenges = () => {
  const links = {
    OrderSummaryComponent: '/Challenges/OrderSummaryComponent',
    QRCodeComponent: '/Challenges/QRCodeComponent',
    SinglePriceGrid: '/Challenges/SinglePriceGrid',
    ArticlePreviewComponent: 'https://cheerful-pastelito-dd1736.netlify.app/',
    PingComingSoonPage: '/Challenges/PingComingSoonPage',
    AgeCalculator: '/Challenges/AgeCalculator',
  };
  return (
    <main class={styles.App}>
      <img src={logo} class={styles.logo} alt="logo" />
      <For each={Object.entries(links)}>
        {([name, link]) => (
          <A href={link} class={styles.link}>
            {name}
          </A>
        )}
      </For>
    </main>
  );
};

export default Challenges;
