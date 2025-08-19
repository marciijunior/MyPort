// src/components/AboutMe.jsx (Versão Final Limpa)
import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe({ sectionRef }) {
  return (
    <section id="sobre" ref={sectionRef}>
      <div className="about-me-content">
        <div className="about-me-image">
          <img className="about-me-image1" src="/foto-about-me.jpg" alt="Foto de Marcio Junior" />
          <img className="about-me-image2" src="/foto-about-me.jpg" alt="Foto de Marcio Junior" />
          <img className="about-me-image3" src="/foto-about-me.jpg" alt="Foto de Marcio Junior" />
        </div>
        <div className="about-me-text">
          <h2 className="about-me-title">Sobre Mim</h2>
          <p className="about-me-subtitle">
            Estudante de Engenharia de Computação, 23 anos.
          </p>
          <p>
            Meu nome é Márcio. Desde sempre, o apelo visual das coisas me
            fascina, mas minha verdadeira curiosidade está em entender como elas
            se conectam e funcionam por dentro.
          </p>
          <p>
            Meu objetivo é transformar essa visão em realidade, desenvolvendo
            projetos onde a engenharia robusta e o design cuidadoso andam lado a
            lado.
          </p>
        </div>
      </div>
    </section>
  );
}
