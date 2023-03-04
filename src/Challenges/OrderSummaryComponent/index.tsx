import { Component, createEffect } from "solid-js";
import { Button, Card, PlanSelection } from "./components";

import styles from "./index.module.css";
import image from "./assets/illustration-hero.svg";
import iconMusic from "./assets/icon-music.svg";
const OrderSummaryComponent: Component = () => {
  return (
    <>
      <main class={styles.OrderSummaryComponent}>
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
      </main>
    </>
  );
};

export default OrderSummaryComponent;
