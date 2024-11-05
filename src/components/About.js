import React from 'react';
import Image1 from '../Images/1.png';
import Image2 from '../Images/2.png';
import Image3 from '../Images/3.png';
import Image4 from '../Images/4.png';
import Image5 from '../Images/Untitled design.png'; // Import the new image

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
        <button className="slide-button">Learn More</button> 
      </div>

      {/* Add the new image here */}
      <div className="about-image-single">
        <img src={Image5} alt="Additional " />
      </div>

      <div className="about-images">
        <img src={Image1} alt="Project screenshot" />
        <img src={Image2} alt="Project demo" />
        <img src={Image3} alt="Workshop event" />
        <img src={Image4} alt="Code snippet example" />
      </div>
    </section>
  );
}

export default About;
