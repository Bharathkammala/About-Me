import React from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';
import './Section.css';

const educationData = [
  {
    institution: 'Annamacharya Institute of Technology & Sciences',
    degree: 'Bachelor of Technology in Electronics And communication Engineering',
    gpa: '8.3',
    years: '2020 - 2024',
    location: 'Tirupati, India',
  },
  {
    institution: 'Krishna Reddy Siddartha Junior College',
    degree: 'Class 12 - Mathematics',
    gpa: '9.2',
    years: '2018 - 2020',
    location: 'Madanapalle, India',
  },
];

function Education() {
  useAnimateOnScroll('.education-item');

  return (
    <section className="portfolio-section">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p>{edu.degree} - CGPA: {edu.gpa}</p>
          <p>{edu.years} | {edu.location}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
