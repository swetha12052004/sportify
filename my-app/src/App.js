import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './project/Home';
import Login from './project/Login.jsx';
import Reg from './project/Reg.jsx';
import Forget from './project/Forget.jsx';
import Product from './project/Product.jsx';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
    </Router>
  );
}
export default App;
