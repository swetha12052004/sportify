import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './project/Login.jsx';
import Reg from './project/Reg.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
    </Router>
  );
}

export default App;
