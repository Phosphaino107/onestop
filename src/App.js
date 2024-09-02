// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './comps/Nav';
import Home from './comps/Home';
import Shop from '../src/comps/Shop';
import About from './comps/About';
import Contact from './comps/Contact';
import Cart from './comps/Cart';
import { CartProvider } from './context/Cartcont';

function App() {
  return (
    <CartProvider>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
