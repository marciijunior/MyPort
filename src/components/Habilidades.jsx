import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "../hooks/useMediaQuery";
import ExpandedContent from "./ExpandedContent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Habilidades = ({ data, expansionState }) => {
  const { botoesData } = data;
  const {
    expandedButtonId,
    buttonRefs,
    handleButtonClick,
    expandedOrigin,
    setExpandedButtonId,
  } = expansionState;

  const isCarouselView = useMediaQuery("(max-width: 1299px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // ADICIONE AS DUAS LINHAS ABAIXO
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-primeiro-main">
      <div className="interligacao-habilidades">
        <h2 className="titulo-habilidades">Habilidades</h2>
        <p className="texto-habilidades">
          A interligacao entre o design e a programação é essencial para criar
          experiências digitais coesas e funcionais.
        </p>
      </div>

      <div className="servicos-container">
        <div className="texto-primeiro-main">
          {isCarouselView ? (
            // MODO CARROSSEL (< 1300px)
            <div className="habilidades-carrossel">
              {" "}
              {/* <-- CLASSE MODIFICADA */}
              <Slider {...settings}>
                {botoesData.map((botao) => (
                  <div key={botao.id} className="slide-item">
                    <button
                      ref={(el) => (buttonRefs.current[botao.id] = el)}
                      onClick={() => handleButtonClick(botao.id)}
                      className={`${botao.className} ${
                        expandedButtonId && expandedButtonId !== botao.id
                          ? "hidden-button"
                          : ""
                      }`}
                    >
                      <span className="img-card">
                        <img src={botao.imageSrc} alt={botao.label} />
                      </span>
                      {botao.label}
                    </button>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            // MODO GRADE (> 1300px)
            <div className="btn-linha1">
              {botoesData.map((botao) => (
                <button
                  key={botao.id}
                  ref={(el) => (buttonRefs.current[botao.id] = el)}
                  onClick={() => handleButtonClick(botao.id)}
                  className={`${botao.className} ${
                    expandedButtonId && expandedButtonId !== botao.id
                      ? "hidden-button"
                      : ""
                  }`}
                >
                  <span className="img-card">
                    <img src={botao.imageSrc} alt={botao.label} />
                  </span>
                  {botao.label}
                </button>
              ))}
            </div>
          )}

          {/* OVERLAY DE EXPANSÃO */}
          <div
            className={`expanding-overlay ${
              expandedButtonId ? "expanded" : ""
            }`}
            style={{ transformOrigin: expandedOrigin }}
          >
            {expandedButtonId && (
              <ExpandedContent buttonId={expandedButtonId} />
            )}

            {expandedButtonId && (
              <button
                className="close-expanded-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedButtonId(null);
                }}
                aria-label="Voltar"
              >
                {/* Ícone aqui, como no exemplo anterior */}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
