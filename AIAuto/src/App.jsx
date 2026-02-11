import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnologySection from './components/TechnologySection';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Features />
        <TechnologySection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
