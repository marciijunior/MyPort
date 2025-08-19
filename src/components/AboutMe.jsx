import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe({ sectionRef, refs }) {
  return (
    <section id="sobre" ref={sectionRef}>
      <div className="about-me-content">
        <div className="about-me-image">
          <img
            className="about-me-image1"
            ref={refs.sobreMim_imagem1}
            src="/foto-about-me.webp"
            alt="Foto de Marcio Junior"
          />
          <img
            className="about-me-image2"
            ref={refs.sobreMim_imagem2}
            src="/foto-about-me.webp"
            alt="Foto de Marcio Junior"
          />
          <img
            className="about-me-image3"
            ref={refs.sobreMim_imagem3}
            src="/foto-about-me.webp"
            alt="Foto de Marcio Junior"
          />
        </div>
        <div className="about-me-text">
          <h2 className="about-me-title" ref={refs.sobreMim_titulo}>
            Sobre Mim
          </h2>
          <p className="about-me-subtitle" ref={refs.sobreMim_subtitulo}>
            Estudante de Engenharia de Computação, 23 anos.
          </p>
          <p ref={refs.sobreMim_paragrafo1}>
            Meu nome é Márcio. Desde sempre, o apelo visual das coisas me
            fascina, mas minha verdadeira curiosidade está em entender como elas
            se conectam e funcionam por dentro.
          </p>
          <p ref={refs.sobreMim_paragrafo2}>
            Meu objetivo é transformar essa visão em realidade, desenvolvendo
            projetos onde a engenharia robusta e o design cuidadoso andam lado a
            lado.
          </p>
        </div>
      </div>
    </section>
  );
}
