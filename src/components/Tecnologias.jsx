// src/components/Tecnologias.jsx
import React from "react";

export default function Tecnologias({ sectionRef, refs, techStackData }) {
  return (
    <section id="tecnologias" ref={sectionRef} className="tech-stack-section">
      <div className="interligacao-tech">
        <h2 className="titulo-tech" ref={refs.tecnologias_titulo}>
          Tecnologias e Ferramentas
        </h2>
        <p className="texto-tech" ref={refs.tecnologias_texto}>
          As ferramentas e
          linguagens que mais utilizo para criar interfaces dinâmicas e
          funcionais.
        </p>
      </div>
      <div className="tech-stack-container" ref={refs.tecnologias_container}>
        <div className="tech-category-column">
          <h3>Frontend</h3>
          <div className="tech-items-list">
            {techStackData.frontend.map((tech, index) => (
              <span key={index} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="tech-category-column">
          <h3>Backend</h3>
          <div className="tech-items-list">
            {techStackData.backend.map((tech, index) => (
              <span key={index} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="tech-category-column">
          <h3>Ferramentas</h3>
          <div className="tech-items-list">
            {techStackData.ferramentas.map((tech, index) => (
              <span key={index} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}