import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Certificates from './components/Certificates'; 
import Experience from './components/Experiance'; 
import backgroundVideo from './Images/back.mp4'; // Import the video file
import './styles/App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" /> {/* Use the imported video */}
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <About />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      >
        ↑ Top
      </button>
    </div>
  );
}

export default App;
