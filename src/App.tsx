import type { Component } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import { OrderSummaryComponent, QRCodeComponent } from './Challenges';
import { Home } from './Pages';
import { Navbar } from './components';
const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/OrderSummaryComponent"
          element={<OrderSummaryComponent />}
        />
        <Route path="/QRCodeComponent" element={<QRCodeComponent />} />
      </Routes>
    </>
  );
};

export default App;
