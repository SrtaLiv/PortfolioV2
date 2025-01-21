import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import YouTube from '../components/YouTube';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default Home;