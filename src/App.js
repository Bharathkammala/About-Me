// src/App.js
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer'; // Optional, but good practice
import './App.css'; // For global styles and animations

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <Education />
        <Projects />
        <Internships />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;