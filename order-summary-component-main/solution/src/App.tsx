import type { Component } from 'solid-js';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';
import PlanSelection from './components/PlanSelection.jsx';
import styles from './App.module.css';
import image from './assets/illustration-hero.svg';
import iconMusic from './assets/icon-music.svg';
const App: Component = () => {
  return (
    <>
      <section class={styles.App}>
        <Card
          header="Order Summary"
          body="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          img_url={image}
        >
          <PlanSelection
            planTitle="Annual Plan"
            planPrice="$59.99"
            planPeriod="year"
            img_url={iconMusic}
          />
          <Button text="Proceed to Payment" />
          <Button text="Cancel Order" btnType="secondary" />
        </Card>
      </section>
    </>
  );
};

export default App;

// <div class="attribution">
//   Challenge by{' '}
//   <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
//     Frontend Mentor
//   </a>
//   . Coded by <a href="#">Brian Poblete</a>.
// </div>;
