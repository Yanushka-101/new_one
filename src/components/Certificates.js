import React from 'react';
import AWSImage from '../Images/AWS.jpg';
import CyberImage from '../Images/cyber.jpg';
import dataImage from '../Images/Data Science.jpg';
import PythonImage from '../Images/python.png';
import SecurityImage from '../Images/Security.jpg';
import SimplilearnImage from '../Images/simplo.png';



function Certificates() {
    return (
    <section id="Certificates">
    <h2>Certificates</h2>
    <div className="Certificates-list">
      <div className="Certificates">
        <h3>AWS Cloud Technical Essentials</h3>
        <p>Provides foundational knowledge of AWS, covering cloud security, identity management, and the AWS management console, issued by Amazon Web Services in February 2024.</p>
        <img src={AWSImage} alt="AWS Cloud Technical Essentials Certificate" className="certificate-image" />
        </div>
      <div className="Certificates">
        <h3>What is Data Science</h3>
        <p>Introduces the basics of data science, including machine learning and deep learning concepts, issued by IBM in July 2023.</p>
        <img src={dataImage} alt="What is Data Science Certificate" className="certificate-image" />
      </div>
      <div className="Certificates">
        <h3>Cloud and Wireless Security</h3>
        <p>Focuses on cloud computing security and wireless network protection strategies, issued by ISC2 in March 2024.</p>
        <img src={SecurityImage} alt="Cloud and Wireless Security Certificate" className="certificate-image" />
      </div>
      <div className="Certificates">
        <h3>Python for Beginners</h3>
        <p>Focuses on Python programming fundamentals, issued by the University of Moratuwa in September 2023.</p>
        <img src={PythonImage}alt="Python for Beginners Certificate" className="certificate-image" />
      </div>
      <div className="Certificates">
        <h3>Introduction to Cybersecurity Tools & Cyber Attacks</h3>
        <p>Covers cybersecurity basics, including vulnerability assessment, malware detection, and information security, issued by IBM in January 2024.</p>
        <img src={CyberImage} alt="Cybersecurity Tools & Cyber Attacks Certificate" className="certificate-image" />
      </div>
      <div className="Certificates">
        <h3>Introduction to Cloud Computing</h3>
        <p>Provides an introduction to cloud computing principles and practices, issued by Simplilearn in September 2023.</p>
        <img src={SimplilearnImage} alt="Introduction to Cloud Computing Certificate" className="certificate-image" />
      </div>
    </div>
  </section>
);
}

export default Certificates;
