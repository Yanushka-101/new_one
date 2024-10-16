import React from 'react';
import Navbar from './components/Navbar'; // Ensure this path is correct
import About from './components/About'; // Ensure this path is correct
import Projects from './components/Projects'; // Ensure this path is correct
import Contact from './components/Contact'; // Ensure this path is correct
import Footer from './components/Footer'; // Ensure this path is correct
import Certificates from './components/Certificates'; // Ensure this path is correct
import Experiance from './components/Experiance'; // Ensure this path is correct
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Certificates/>
      <Experiance />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
