import { Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import * as c from './Challenges';
import { Challenges } from './Pages';
import { Navbar } from './components';
const App: Component = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Challenges />}></Route>
          <Route path="/Challenges">
            <Route path="/" element={<Challenges />} />
            <Route path="/OrderSummaryComponent" element={<c.OrderSummaryComponent />} />
            <Route path="/QRCodeComponent" element={<c.QRCodeComponent />} />
            <Route path="/SinglePriceGrid" element={<c.SinglePriceGrid />} />
            <Route path="/PingComingSoonPage" element={<c.Ping />} />
            <Route path="/AgeCalculator" element={<c.AgeCalculator />} />
            <Route path="/TestimonialsGrid" element={<c.TestimonialsGrid />} />
            <Route path="/Calculator" element={<c.Calculator />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
