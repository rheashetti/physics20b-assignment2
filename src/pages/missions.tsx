import './Missions.css';
import NancyGraceRoman from '../assets/nancy.jpeg';
import Euclid from '../assets/euclid.jpg';
import VeraRubin from '../assets/rubin01.jpg';

export default function Missions() {
  return (
    <section id="missions" className="missions-section">
      <div className="missions-intro">
        <h2>Ongoing Missions & Beyond</h2>
        
        <h4>
          To uncover the mysteries of dark energy, scientists are launching missions
          that strive to map the universe. These space and ground based observatories
          aim to understand how dark energy behaves, how it has evolved over time, and whether it’s
          a force, a property of space, or a flaw in our understanding of gravity.
        </h4>
      </div>

      <div className="missions-grid">
        <div className="mission-card">
          <h3>Euclid Space Telescope</h3>
          <img src={Euclid} alt="Euclid Space Telescope" />
          <h4>
            The European Space Agency’s Euclid mission is creating a 3D map of the universe by observing billions
            of galaxies across space and time. This would help scientists understand how dark energy influences cosmic
            structure and expansion.
          </h4>
        </div>

        <div className="mission-card">
          <h3>Vera C. Rubin Observatory</h3>
          <img src={VeraRubin} alt="Vera C. Rubin Observatory" />
          <h4>
            Based in Chile, this observatory will take wide, deep images of the sky,
            helping scientists track how the universe’s expansion rate changes over time.
          </h4>
        </div>

        <div className="mission-card">
          <h3>Nancy Roman Telescope</h3>
          <img src={NancyGraceRoman} alt="Nancy Grace Roman Telescope" />
          <h4>
            NASA’s Roman Telescope will explore the structure and evolution of the universe, observing
            supernovae, gravitational lensing, and galaxy distribution to investigate dark energy.
          </h4>
        </div>
        
      </div>
    </section>
  );
}

