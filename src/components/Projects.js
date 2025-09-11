// src/components/Projects.js
import React from 'react';
import './Section.css'; // Common styles for sections

const projectData = [
  {
    title: 'Secure User Management System with API Support',
    technologies: 'C#, ASP.NET Web Forms, HTML, MySQL',
    date: 'June 2025',
    description: [
      'Developed a modular user management system with role-based login, registration, OTP/passcode authentication, and MySQL-backed data handling via Web Forms and console UI.',
      'Integrated APIs like Twilio (SMS/WhatsApp), Google Maps, and Gmail SMTP to enable real-time communication, geolocation services, and secure data updates.',
    ],
  },
  {
    title: 'College Portal (WinForms App)',
    technologies: 'C#, WinForms, SQL Server, GUI Design, CRUD Operations',
    date: 'June 2025',
    description: [
      'Built a role-based college management system in C# with MySQL, enabling Admin, Teacher, and Student dashboards.',
      'Handled CRUD operations for attendance, marks, and fees with modular forms, clean UI/UX, and downloadable invoices.',
    ],
  },
  {
    title: 'Power Management Of Street Lights using Vehicle Movement detection',
    technologies: 'Embedded Systems, IR/LDR Sensors', // Added relevant tech
    date: 'Aug 2024',
    description: [
      'Designed a smart street lighting system using IR sensors to detect vehicle movement and LDR sensors to sense ambient light levels.',
      'Implemented automated brightness control, LEDs glow at high intensity when vehicles are detected and dim in their absence.',
    ],
  },
  {
    title: 'ChatGPT API integration in applications',
    technologies: 'AI Models, API Integration', // Added relevant tech
    date: 'Feb 2024',
    description: [
      'Developed an intelligent assistant that generates real-time responses by combining multiple AI models and live search data.',
      'Built tools to summarize YouTube videos and extract insights from PDFs, CSVs, and Excel files.',
    ],
  },
];

function Projects() {
  return (
    <section className="portfolio-section">
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p className="project-meta" style={{ '--item-delay': `${index * 0.1}s` }}>{project.technologies} | {project.date}</p>
          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;