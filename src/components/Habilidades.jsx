// src/components/Habilidades.jsx
import React from "react";
import ExpandedContent from "../ExpandedContent";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Habilidades({
  sectionRef,
  refs,
  data,
  expansionState,
}) {
  const { botoesData, techStackData } = data;
  const {
    expandedButtonId,
    buttonRefs,
    handleButtonClick,
    setExpandedButtonId,
    expandedOrigin,
  } = expansionState;

  // Hook de animação para o novo parágrafo
  const textoTecnologiasRef = useScrollReveal({
    origin: "left",
    reset: true,
    delay: 200,
  });

  return (
    <section id="servicos" ref={sectionRef} className="container-primeiro-main">
      <div className="interligacao-habilidades">
        <h2 className="titulo-habilidades" ref={refs.tituloPrimeiroMainRef}>
          {" "}
          Habilidades{" "}
        </h2>
        <p className="texto-habilidades" ref={refs.textoPrimeiroMainRef}>
          {" "}
          A interligação entre o design e a programação é essencial para criar
          experiências digitais coesas e funcionais.{" "}
        </p>
      </div>
      <div className="servicos-container">
        <div className="primeiro-main" ref={refs.mainImageRef}></div>
        <div className="texto-primeiro-main" ref={refs.mainTextRef}>
          <div className="btn-linha1">
            {botoesData.map((botao) => (
              <button
                key={botao.id}
                ref={(el) => (buttonRefs.current[botao.id] = el)}
                className={`${botao.className} ${
                  expandedButtonId && expandedButtonId !== botao.id
                    ? "hidden-button"
                    : ""
                }`}
                onClick={() => handleButtonClick(botao.id)}
                style={{
                  visibility:
                    expandedButtonId === botao.id ? "hidden" : "visible",
                  opacity: expandedButtonId === botao.id ? 0 : 1,
                  pointerEvents:
                    expandedButtonId === botao.id ? "none" : "auto",
                }}
              >
                {" "}
                <span className="img-card">
                  {" "}
                  <img src={botao.imageSrc} alt={botao.label} />{" "}
                </span>{" "}
                {botao.label}{" "}
              </button>
            ))}
            <div
              className={`expanding-overlay ${
                expandedButtonId ? "expanded" : ""
              }`}
              style={{ transformOrigin: expandedOrigin }}
            >
              <ExpandedContent buttonId={expandedButtonId} />
              {expandedButtonId && (
                <span
                  className="close-expanded-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedButtonId(null);
                  }}
                >
                  {" "}
                  X{" "}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="tech-stack-section">
        <div className="interligacao-tech">
          {" "}
          <h2 className="titulo-tech" ref={refs.tituloSkillsRef}>
            {" "}
            Tecnologias e Ferramentas{" "}
          </h2>{" "}
          <p className="texto-tech" ref={textoTecnologiasRef}>
            Aqui está um resumo do meu arsenal tecnológico. São as ferramentas e
            linguagens que mais utilizo para criar interfaces dinâmicas e
            funcionais.
          </p>
        </div>
        <div className="tech-stack-container" ref={refs.textoSkillsRef}>
          <div className="tech-category-column">
            <h3>Frontend</h3>
            <div className="tech-items-list">
              {" "}
              {techStackData.frontend.map((tech, index) => (
                <span key={index} className="tech-item">
                  {" "}
                  {tech}{" "}
                </span>
              ))}{" "}
            </div>
          </div>
          <div className="tech-category-column">
            <h3>Backend</h3>
            <div className="tech-items-list">
              {" "}
              {techStackData.backend.map((tech, index) => (
                <span key={index} className="tech-item">
                  {" "}
                  {tech}{" "}
                </span>
              ))}{" "}
            </div>
          </div>
          <div className="tech-category-column">
            <h3>Ferramentas</h3>
            <div className="tech-items-list">
              {" "}
              {techStackData.ferramentas.map((tech, index) => (
                <span key={index} className="tech-item">
                  {" "}
                  {tech}{" "}
                </span>
              ))}{" "}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}