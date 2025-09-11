// src/components/Certifications.js
import React from 'react';
import './Section.css'; // Common styles for sections

const certificationsData = [
  'Microsoft - Azure AI Fundamentals',
  'Hacker Rank - SQL',
  'LinkedIn Learning - AWS Solution Architecture',
  'Internet Of Things',
  'Hacker Rank - Python',
];

function Certifications() {
  return (
    <section className="portfolio-section">
      <h2>Certifications</h2>
      <ul className="certification-list"  >
        {certificationsData.map((cert, index) => (
          <li key={index} style={{ '--item-delay': `${index * 0.1}s` }}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;