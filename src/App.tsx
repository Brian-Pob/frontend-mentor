import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import logo from './logo.svg';
import styles from './App.module.css';
import OrderSummaryComponent from './Challenges/OrderSummaryComponent';
import QRCodeComponent from './Challenges/QRCodeComponent';
import Home from './Home/Home.jsx';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/OrderSummaryComponent"
        element={<OrderSummaryComponent />}
      />
      <Route path="/QRCodeComponent" element={<QRCodeComponent />} />
    </Routes>
  );
};

export default App;
