import { A, Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import s from './App.module.css';
import * as c from './Challenges';
import { Challenges, Home } from './Pages';
import { Footer, Navbar } from './components';
const App: Component = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/Challenges">
            <Route path="/" element={Challenges} />
            <Route path="/OrderSummaryComponent" element={<c.OrderSummaryComponent />} />
            <Route path="/QRCodeComponent" element={<c.QRCodeComponent />} />
            <Route path="/SinglePriceGrid" element={<c.SinglePriceGrid />} />
            <Route path="/PingComingSoonPage" element={<c.Ping />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
