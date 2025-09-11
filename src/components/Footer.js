// src/components/Footer.js
import React from 'react';
import './Footer.css'; // For Footer specific styles

function Footer() {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} Kammala Bharath. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
