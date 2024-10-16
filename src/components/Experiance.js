import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience & Skills</h2>
      <div className="experience-skills-container">
        {/* Experience Section */}
        <div className="experience-list">
          <h3>Experience</h3>
          <div className="experience">
            <h4>Experience 1</h4>
            <p>Description of your experience.</p>
          </div>
          <div className="experience">
            <h4>Experience 2</h4>
            <p>Description of your experience.</p>
          </div>
          {/* Add more experiences as needed */}
        </div>

        {/* Skills Section */}
        <div className="skills-list">
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Docker</li>
            <li>Git</li>
            <li>CD/CI</li>
            <li>Java</li>
            <li>Linux</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
