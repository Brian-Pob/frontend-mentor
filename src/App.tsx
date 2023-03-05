import type { Component } from "solid-js";
import { Routes, Route, A, Router } from "@solidjs/router";
import { OrderSummaryComponent, QRCodeComponent, SinglePriceGrid } from "./Challenges";
import { Home, Challenges } from "./Pages";
import { Navbar, Footer } from "./components";
import s from "./App.module.css";
const App: Component = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div class={s.wrapper}>
          <Routes>
            <Route path="/" element={Home}></Route>
            <Route path="/Challenges">
              <Route path="/" element={Challenges} />
              <Route path="/OrderSummaryComponent" element={<OrderSummaryComponent />} />
              <Route path="/QRCodeComponent" element={<QRCodeComponent />} />
              <Route path="/SinglePriceGrid" element={<SinglePriceGrid />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
