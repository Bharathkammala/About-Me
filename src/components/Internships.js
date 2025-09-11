// src/components/Internships.js
import React from 'react';
import './Section.css'; // Common styles for sections

const internshipData = [
  {
    company: 'August Devices',
    role: 'Software Developer Intern',
    duration: 'Jun 2025 - Present',
    location: 'Hyderabad',
    description: [
      'Currently working on .NET-based application development, including API integration and database operations using SQL Server.',
    ],
  },
  {
    company: 'PreqInsta AWS Internship',
    role: 'Cloud Intern',
    duration: 'Jun 2023 - Jul 2023',
    location: 'Remote',
    description: [
      'Gained practical experience in AWS cloud services and related technologies.', // Placeholder, you can elaborate more
    ],
  },
  {
    company: 'YBI – Data Science and Machine Learning',
    role: 'Data Science Intern',
    duration: 'Aug 2023 - Sep 2023',
    location: 'Remote',
    description: [
      'Worked on data science projects and applied machine learning techniques.', // Placeholder, you can elaborate more
    ],
  },
];

function Internships() {
  return (
    <section className="portfolio-section">
      <h2>Internship</h2>
      {internshipData.map((internship, index) => (
        <div key={index} className="internship-item" style={{ '--item-delay': `${index * 0.1}s` }}>
          <h3>{internship.company}</h3>
          <p className="internship-meta">{internship.role} | {internship.duration} | {internship.location}</p>
          <ul>
            {internship.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Internships;