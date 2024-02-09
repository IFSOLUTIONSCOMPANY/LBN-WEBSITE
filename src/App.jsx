import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/landingPage/Home';
import Actualites from './components/Actualites/Actualites';
import AOS from 'aos';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
