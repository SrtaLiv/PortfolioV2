import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import InstallModal from './animate/TransitionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;