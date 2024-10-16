import React from 'react';
import photo from '../Images/react_photo1.jpg'; // Use relative path without 'my-app/src/'

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m Yanushka, a passionate software engineer skilled in React, Python, Docker, Git, 
          Continuous Deployment/Continuous Integration (CD/CI), Java, and Linux. With a strong foundation 
          in both front-end and back-end development, I enjoy creating robust applications and solutions that enhance user experiences. 
          Currently, I’m pursuing my degree at the University of Sri Jayawardenepura while interning at the Export Development Board, 
          where I apply my technical skills in real-world projects. I’m dedicated to continuous learning and eager to connect with others in the tech community!
        </p>
      </div>
      <div className="about-image">
        <img src={photo} alt="Yanushka" /> {/* Correct usage of the imported photo */}
      </div>
    </section>
  );
}

export default About;
