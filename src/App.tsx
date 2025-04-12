import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './layouts/Scroll';
import Home from './pages/Home';
import Information from './pages/Information';
import Proyects from './pages/Proyects';
import Services from './pages/Services';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
