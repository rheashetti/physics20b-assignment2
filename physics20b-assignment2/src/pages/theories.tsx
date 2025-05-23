import React, { useState } from 'react';
import './Theories.css';

const theories_text = [
  {
    title: 'Vacuum Energy',
    description:
      'Vacuum energy is the theoretical background energy present in empty space. It might be equivalent to the cosmological constant in Einstein’s equations, however, the predicted amount is vastly larger than what is observed, which leads to the cosmological constant problem, that there should either be so much vacuum energy that galaxies could not have formed, or there should be no vacuum energy at all.',
  },
  {
    title: 'Quintessence',
    description:
      'Quintessence is a type of dynamic energy field or fluid that fills space and behaves in the opposite way to normal matter. Unlike vacuum energy, which is constant, quintessence can vary in both amount and distribution throughout space and time. This makes it a more flexible alternative to the cosmological constant. Quintessence is a proposed explanation for dark energy since unlike a constant dark energy density, quintessence could evolve over time, potentially changing the rate of cosmic acceleration.',
  },
  {
    title: 'Space Wrinkles',
    description:
      'Some theories suggest that defects or “wrinkles” in the fabric of spacetime, known as topological defects, could be affecting the universe’s expansion. Topological defects are considered as a possible source or component of dark energy, potentially playing a role in its accelerated expansion.',
  },
  {
    title: 'Flaw in General Relativity',
    description:
      'Some scientists propose that our understanding of gravity is incomplete at cosmic scales. Unimodular gravity is a modified theory attempting to explain the observed acceleration of the universe without having dark energy as a separate force or substance. Instead, these theories suggest that changes to the laws of gravity themselves could naturally produce the accelerated expansion we currently attribute to dark energy.',
  },
];

export default function Theories() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % theories_text.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + theories_text.length) % theories_text.length);
  };

  return (
    <section id="theories" className="theories-section">
      <h2>Leading Theories Behind Dark Energy</h2>
      <div className="theory-card">
        <h2>{theories_text[current].title}</h2>
        <h4>{theories_text[current].description}</h4>
        <div className="theory-nav">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>
    </section>
  );
}
