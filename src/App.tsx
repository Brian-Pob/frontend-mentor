import { A, Navigate, Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import * as c from './Challenges';
import { Challenges, Home } from './Pages';
import { Footer, Navbar } from './components';
const App: Component = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Challenges">
            <Route path="/" element={<Challenges />} />
            <Route path="/OrderSummaryComponent" element={<c.OrderSummaryComponent />} />
            <Route path="/QRCodeComponent" element={<c.QRCodeComponent />} />
            <Route path="/SinglePriceGrid" element={<c.SinglePriceGrid />} />
            <Route path="/PingComingSoonPage" element={<c.Ping />} />
            <Route path="/AgeCalculator" element={<c.AgeCalculator />} />
            <Route path="/TestimonialsGrid" element={<c.TestimonialsGrid />} />
            <Route path="/Calculator" element={<c.Calculator />} />

            {/* Paths below are hosted on a different site*/}
            <Route path="/ArticlePreviewComponent" element={<c.Redirector />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
