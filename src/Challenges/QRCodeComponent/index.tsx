import type { Component } from 'solid-js';
import Card from './components/Card';
// import './index.css';
import styles from './index.module.css';
import qr from './assets/image-qr-code.png';
const QRCodeComponent: Component = () => {
  return (
    <main class={styles.QRCodeComponent}>
      <Card
        header="Improve your front-end skills by building projects"
        body="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        img_url={qr}
      ></Card>
    </main>
  );
};

export default QRCodeComponent;
