// src/components/SeparadorDots.jsx
import React from 'react';

export default function SeparadorDots({ animRef }) {
  return (
    <section className="dots-column-section" ref={animRef}>
      <div className="dots-container">
        <div className="dot"></div> <div className="dot"></div>
        <div className="dot"></div> <div className="dot"></div>
        <div className="dot"></div> <div className="dot"></div>
      </div>
    </section>
  );
}