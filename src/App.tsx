import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import Loader from './animate/UseDecryptedText';

function App() {
  // Por defecto el loading se muestra
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos, luego desactivamos el loader
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {loading && (
          <Loader/>
      )}
      {!loading && (
        <>
          <Navbar />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;