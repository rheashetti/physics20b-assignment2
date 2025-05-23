import './App.css'
import './index.css'
import { useEffect } from 'react';
import Home from './pages/home';
import Discovery from './pages/discovery';
import Theories from './pages/theories';
import Missions from './pages/missions';
import Sources from './pages/sources';

function App() {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let offset = 70;
      if(targetElement.id === 'about'){
        offset = 150;
      }
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.top-nav-bar-links a');

      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200; 
        if (window.pageYOffset >= sectionTop) {
          currentSectionId = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
    <>
      <div className="top-nav-bar">

        <div className="top-nav-bar-links">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
          <a href="#discovery" onClick={(e) => handleScroll(e, 'discovery')}>The Accidental Discovery</a>
          <a href="#theories" onClick={(e) => handleScroll(e, 'theories')}>Leading Theories Behind Dark Energy</a>
          <a href="#missions" onClick={(e) => handleScroll(e, 'missions')}>Ongoing Missions & Beyond</a>
        </div>
      </div>
      <div id="root">
        <Home />
        <Discovery />
        <Theories />
        <Missions />
        <Sources />
      </div>
      <div className="footer">
        <p>© 2025 Rhea Shetti</p>
      </div>
        
    </>
  )
}

export default App
