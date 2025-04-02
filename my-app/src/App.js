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
        <Route path="/" element={<Home/>} /> 
        <Route path="/Product" element={<Product />} /> 
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/Reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
