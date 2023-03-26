import { A } from '@solidjs/router';
import logo from '../../assets/favicon.svg';
import styles from './index.module.css';

const Challenges = () => {
  return (
    <main class={styles.App}>
      <img src={logo} class={styles.logo} alt="logo" />
      <A class={styles.link} href="/Challenges/OrderSummaryComponent">
        Order Summary Component
      </A>
      <A class={styles.link} href="/Challenges/QRCodeComponent">
        QR Code Component
      </A>
      <A class={styles.link} href="/Challenges/SinglePriceGrid">
        Single Price Grid Component
      </A>
      <A class={styles.link} href="https://cheerful-pastelito-dd1736.netlify.app/" target="_blank">
        Article Preview Component
      </A>
      <A class={styles.link} href="/Challenges/PingComingSoonPage">
        Ping Coming Soon Page
      </A>
    </main>
  );
};

export default Challenges;
