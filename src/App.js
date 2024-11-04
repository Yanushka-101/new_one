import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Certificates from './components/Certificates'; 
import Experience from './components/Experiance'; 
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
