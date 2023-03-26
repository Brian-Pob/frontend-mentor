import { Component } from 'solid-js';
import logo from './assets/logo.svg';
import s from './index.module.css';

const Ping: Component<{}> = (props) => {
  return (
    <main class={s.main}>
      <div class="welcomeContent">
        <div class="logo">
          <img src={logo} alt="logo" />
        </div>
        <div class="welcomeText">
          <h1>
            We are launching <strong>soon!</strong>
          </h1>
          <p>Subscribe and get notified.</p>
        </div>
      </div>
      <div class="emailInput"></div>
      <div class="previewImage"></div>
      <div class="footerContent"></div>
    </main>
  );
};

export default Ping;
