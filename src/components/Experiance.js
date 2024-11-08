import { useState, useEffect } from "react";

function Experience() {
  const [visibleExperience, setVisibleExperience] = useState(0);

  const skills = [
    "React & React Native",
    "Python",
    "Docker",
    "Git & GitHub",
    "Continuous Deployment/Continuous Integration (CD/CI)",
    "Java",
    "Linux"
  ];

  // Auto toggle between Experience 1 and Experience 2 every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleExperience(prev => (prev === 0 ? 1 : 0)); // Toggle between 0 and 1
    }, 20000); // 20 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="experience">
      <h2>Experience & Skills</h2>
      <div className="Experience-container">
        {/* Experience Section */}
        <div className="Experience-list">
          <div className="Experience">
            {visibleExperience === 0 && (
              <>
                <h3>IT & Network Intern</h3>
                <h4>Sri Lanka Export Development Board</h4>
                <p>June 2024 - Present</p>
                <p>Colombo, Western Province, Sri Lanka</p>
                <p>
                  As an IT and Networking Intern at the Sri Lanka Export Development Board since June 2024, I have gained valuable experience in supporting the organization's IT infrastructure and software development efforts. My primary responsibilities include assisting in the development and maintenance of internal software solutions aimed at automating routine tasks and improving overall efficiency.
                </p>
                <p>
                  During my internship, I successfully developed a custom script to automate data backups, significantly reducing manual effort and minimizing the risk of data loss.
                </p>
              </>
            )}

            {visibleExperience === 1 && (
              <>
                <h3>Mobile App Developer</h3>
                <h4>Morg (Startup Company)</h4>
                <p>August 2024 - Present</p>
                <p>Remote</p>
                <p>
                  As a Mobile App Developer at Morg, a dynamic startup company, I have been instrumental in developing and maintaining mobile applications using React Native and Android Studio. My role involves designing user-friendly interfaces and implementing features using Kotlin and Java, ensuring high performance and responsiveness across devices.
                </p>
                <p>
                  In addition to front-end development, I manage backend database interactions using MongoDB and Firebase, facilitating seamless data management and integration. This position has enhanced my skills in mobile development and has provided me with valuable insights into agile methodologies and startup dynamics.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="Skills-list">
          <div className="Skills">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Experience;
