// src/components/Header.js
import React from 'react';
import './Header.css'; // For Header specific styles

function Header() {
  return (
    <header className="header-section">
      <div className="header-content">
        <h1 className="name">Kammala Bharath</h1>
        <p className="title">Electronics And Communication Engineer</p>
        <div className="contact-info">
          <span>+91-9492693538</span> | 
          <span>kammalabharath96@gmail.com</span> | 
          <a href="https://linkedin.com/in/bharathkammala" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/bharathkammala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </header>
  );
}

export default Header;