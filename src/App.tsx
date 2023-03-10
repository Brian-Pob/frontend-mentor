import { A, Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import s from "./App.module.css";
import {
  ArticlePreviewComponent,
  OrderSummaryComponent,
  QRCodeComponent,
  SinglePriceGrid,
} from "./Challenges";
import { Challenges, Home } from "./Pages";
import { Footer, Navbar } from "./components";
const App: Component = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={Home}></Route>
          <Route path="/Challenges">
            <Route path="/" element={Challenges} />
            <Route path="/OrderSummaryComponent" element={<OrderSummaryComponent />} />
            <Route path="/QRCodeComponent" element={<QRCodeComponent />} />
            <Route path="/SinglePriceGrid" element={<SinglePriceGrid />} />
            <Route path="/ArticlePreview" element={<ArticlePreviewComponent />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
