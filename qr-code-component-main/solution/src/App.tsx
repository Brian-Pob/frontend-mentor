import type { Component } from 'solid-js';
import { ParentComponent } from 'solid-js';

import styles from './App.module.css';
import qr from './assets/image-qr-code.png';

const Card: ParentComponent<{
  header: string;
  body: string;
  img_url: string;
}> = (props) => {
  return (
    <div class={styles.cardContainer}>
      <div class={styles.cardContent}>
        <img
          class={styles.cardImage}
          src={props.img_url}
          alt="QR Code for Frontend Mentor"
          srcset=""
        />
        <div class={styles.cardBody}>
          <h2>{props.header}</h2>
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
};
const App: Component = () => {
  return (
    <section>
      <Card
        header="Improve your front-end skills by building projects"
        body="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        img_url={qr}
      ></Card>
    </section>
  );
};

export default App;
