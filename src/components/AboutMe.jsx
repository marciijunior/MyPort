import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/AboutMe.css";

export default function AboutMe({ sectionRef }) {
  // Refs de animação para cada elemento
  const aboutMeImageRef = useScrollReveal({ origin: "left", distance: "100px", duration: 1000, viewFactor: 0.3, reset: true });
  const aboutMeTitleRef = useScrollReveal({ origin: "right", distance: "100px", duration: 1000, viewFactor: 0.3, reset: true });
  const aboutMeSubtitleRef = useScrollReveal({ origin: "right", distance: "100px", duration: 1000, viewFactor: 0.3, reset: true });
  const paragraph1Ref = useScrollReveal({ origin: "right", distance: "100px", duration: 1000, viewFactor: 0.3, reset: true });
  const paragraph2Ref = useScrollReveal({ origin: "right", distance: "100px", duration: 1000, viewFactor: 0.3, reset: true });

  return (
    <section id="sobre" ref={sectionRef} className="about-me-section">
      <div className="about-me-content">
        <div className="about-me-image" ref={aboutMeImageRef}>
          <img src="/foto-about-me.JPG" alt="Foto de Marcio Junior" />
        </div>
        <div className="about-me-text">
          <h2 className="about-me-title" ref={aboutMeTitleRef}>Sobre Mim</h2>
          <p className="about-me-subtitle" ref={aboutMeSubtitleRef}>
            Estudante de Engenharia de Computação, 23 anos.
          </p>
          <p ref={paragraph1Ref}>
            Apaixonado por tecnologia e pela criação de soluções inovadoras.
            Minha jornada na programação teve início na universidade, em um
            contexto de engenharia, onde a solução de problemas através da
            lógica me atraiu profundamente.
          </p>
          <p ref={paragraph2Ref}>
            Paralelamente, minha afinidade com o design gráfico me proporcionou
            uma perspectiva única sobre a importância da usabilidade e da
            experiência do usuário no desenvolvimento de software. Acredito que
            a excelência de um produto digital está na intersecção entre um
            código eficiente e uma interface intuitiva. Essa crença me motiva a
            aprimorar constantemente minhas habilidades em diversas tecnologias,
            com o objetivo de construir soluções que não apenas funcionem de
            maneira impecável, mas que também sejam agradáveis de usar.
          </p>
        </div>
      </div>
    </section>
  );
}