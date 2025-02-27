import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './layouts/Scroll';
import Home from './pages/Home';
import Information from './pages/Information';
import Proyects from './pages/Proyects';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
    </Router>
  );
};

export default App;
