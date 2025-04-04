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
        <Route path="/login" element={<Login />} /> 
        <Route path="/Reg" element={<Reg />} />
      </Routes>
    </Router>
  );
}
export default App;
