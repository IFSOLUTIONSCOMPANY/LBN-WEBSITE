import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/landingPage/Home';
import Actualites from './components/Actualites/Actualites';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
