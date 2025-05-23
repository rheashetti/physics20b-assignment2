import universeHistory from '../assets/universe-history.png';
import React from 'react';
const Discovery: React.FC = () => {

  return (
    <section id="discovery">
      <h2> The Accidental Discovery </h2>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
        <h4 style={{ flex: 1 }}>
          The existence of dark energy was first discovered in the late 1990s when astronomers were studying Type Ia supernovae, which are exploding stars with a known brightness and allowed researchers to calculate how far away distant galaxies were. To their surprise, the supernovae appeared dimmer than expected, which meant the galaxies were farther away than previously thought. This suggested that the expansion of the universe is accelerating. Two research teams confirmed this result independently in 1998, and this groundbreaking discovery led to the concept of dark energy as the cause of the universe’s accelerated expansion.
        </h4>
        <div style={{ flex: 1, marginTop:"2em" }}>
            <img src={universeHistory} style={{flex: 1, width: "100%", height: "auto", marginTop: "0.3em"}}/>
            <p style={{ textAlign: "center", marginTop: "1rem", fontWeight: "bold" , color: "#E6E6FA" }}>
            </p>
        </div>
      </div>
      
    </section>
    
  );
};

export default Discovery;