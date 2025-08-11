// src/components/Tecnologias.jsx (Atualizado com Carrossel)
import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "../hooks/useMediaQuery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tecnologias({ sectionRef, techStackData }) {
  // Retorna true se a tela for menor que 1000px
  const isCarouselView = useMediaQuery('(max-width: 999px)');

  // Configurações do Carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: true,      // <-- ADICIONE ESTA LINHA
    centerPadding: '0px',  // <-- ADICIONE ESTA LINHA
  };
  // Helper para renderizar uma coluna (evita repetição de código)
  const renderCategoryColumn = (title, techs) => (
    <div className="tech-category-column">
      <h3>{title}</h3>
      <div className="tech-items-list">
        {techs.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tecnologias" ref={sectionRef} className="tech-stack-section">
      <div className="interligacao-tech">
        <h2 className="titulo-tech">Tecnologias e Ferramentas</h2>
        <p className="texto-tech">
          As ferramentas e linguagens que mais utilizo.
        </p>
      </div>

      <div className="tech-stack-container">
        {isCarouselView ? (
          // ---- VISTA DE CARROSSEL PARA TELAS MENORES ----
          <div className="tech-carousel">
            <Slider {...settings}>
              {renderCategoryColumn("Frontend", techStackData.frontend)}
              {renderCategoryColumn("Backend", techStackData.backend)}
              {renderCategoryColumn("Ferramentas", techStackData.ferramentas)}
            </Slider>
          </div>
        ) : (
          // ---- VISTA DE GRADE PARA TELAS MAIORES ----
          <>
            {renderCategoryColumn("Frontend", techStackData.frontend)}
            {renderCategoryColumn("Backend", techStackData.backend)}
            {renderCategoryColumn("Ferramentas", techStackData.ferramentas)}
          </>
        )}
      </div>
    </section>
  );
}