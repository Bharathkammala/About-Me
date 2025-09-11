// src/components/Skills.js
import React from 'react';
import './Section.css'; // Common styles for sections

const technicalSkills = {
  languages: ['CSharp', 'Java', 'Python', 'MySQL'],
  developerTools: ['VS Code', 'Intellij Idea'],
  technologiesFrameworks: ['.NET Framework', 'ASP.NET', 'WinForms', 'ADO.NET', 'GitHub'],
};

const courseworkSkills = [
  '.NET Framework & ADO.NET',
  'Database Management System (DBMS)',
  'Web Technologies (HTML, CSS, JavaScript Basics)',
  'OOPS Concept',
  'API Integration',
];

function Skills() {
  return (
    <section className="portfolio-section">
      <h2>Technical Skills</h2>
      <div className="skills-category" style={{ '--item-delay': '0s' }}> {/* First category, no delay or small delay */}
        <h3>Languages:</h3>
        <p>{technicalSkills.languages.join(', ')}</p>
      </div>
      <div className="skills-category" style={{ '--item-delay': '0.1s' }}> {/* Second category */}
        <h3>Developer Tools:</h3>
        <p>{technicalSkills.developerTools.join(', ')}</p>
      </div>
      <div className="skills-category" style={{ '--item-delay': '0.2s' }}> {/* Third category */}
        <h3>Technologies/Frameworks:</h3>
        <p>{technicalSkills.technologiesFrameworks.join(', ')}</p>
      </div>

      <h2>Coursework / Skills</h2>
      <ul className="coursework-list">
        {courseworkSkills.map((skill, index) => (
          <li key={index} style={{ '--item-delay': `${index * 0.1 + 0.3}s` }}> {/* Start after categories */}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;