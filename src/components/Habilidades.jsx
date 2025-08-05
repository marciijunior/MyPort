// src/components/Habilidades.jsx
import React from "react";
import ExpandedContent from "../ExpandedContent";

export default function Habilidades({
  sectionRef,
  refs,
  data,
  expansionState,
}) {
  const { botoesData } = data;
  const {
    expandedButtonId,
    buttonRefs,
    handleButtonClick,
    setExpandedButtonId,
    expandedOrigin,
  } = expansionState;

  return (
    <section id="servicos" ref={sectionRef} className="container-primeiro-main">
      <div className="interligacao-habilidades">
        <h2 className="titulo-habilidades" ref={refs.habilidades_titulo}>
          Habilidades
        </h2>
        <p className="texto-habilidades" ref={refs.habilidades_texto}>
          A interligação entre o design e a programação é essencial para criar
          experiências digitais coesas e funcionais.
        </p>
      </div>
      <div className="servicos-container">
        <div className="primeiro-main" ref={refs.habilidades_imagemFundo}></div>
        <div className="texto-primeiro-main" ref={refs.habilidades_containerBotoes}>
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
                <span className="img-card">
                  <img src={botao.imageSrc} alt={botao.label} />
                </span>
                {botao.label}
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
                  X
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}