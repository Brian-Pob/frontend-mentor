import { A } from "@solidjs/router";
import styles from "./index.module.css";
import logo from "../../assets/favicon.svg";

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
    </main>
  );
};

export default Challenges;
