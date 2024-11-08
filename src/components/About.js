import React, { useState } from 'react';
import Image1 from '../Images/1.png';
import Image2 from '../Images/2.png';
import Image3 from '../Images/3.png';
import Image4 from '../Images/4.png';
import Image5 from '../Images/Untitled design.png';

function About() {
  const [expanded, setExpanded] = useState(false);

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
          {expanded && (
            <span>
              <br /><br />
              Beyond technical skills, I’m also focused on developing a creative, problem-solving mindset and exploring new technologies. 
              In my most recent projects, I’ve delved into optimizing server-side performance and improving deployment processes. 
              I’m excited about exploring fields like artificial intelligence, cloud computing, and cybersecurity in the future.
            </span>
          )}
        </p>
        <div className="button-group">
          <button className="slide-button" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show Less' : 'Learn More'}
          </button>
          <a href="/Yanushka_CV.pdf" download className="download-button">
            Download CV
          </a>
        </div>
      </div>

      <div className="about-image-single">
        <img src={Image5} alt="Additional" />
      </div>

      <div className="about-images">
        <a href="https://github.com/YanushkaKumar" target="_blank" rel="noopener noreferrer">
          <img src={Image1} alt="Project screenshot" />
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=NZVHFspwCwLBSHKGLbkGljVpsJqtccvRJWJRSZrWXWQZFQnJjcqkfRdgFRzhbvLzBKHlSB" target="_blank" rel="noopener noreferrer">
          <img src={Image2} alt="Project demo" />
        </a>
        <a href="https://www.linkedin.com/in/yanushka-kumar-3a8673248/" target="_blank" rel="noopener noreferrer">
          <img src={Image3} alt="Workshop event" />
        </a>
        <a href="https://www.facebook.com/yanushka.kumara.90/" target="_blank" rel="noopener noreferrer">
          <img src={Image4} alt="Code snippet example" />
        </a>
      </div>
    </section>
  );
}

export default About;
