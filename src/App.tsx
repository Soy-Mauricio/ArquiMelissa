import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './layouts/Scroll';
import Home from './pages/Home';
import Information from './pages/Information';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </Router>
  );
};

export default App;
