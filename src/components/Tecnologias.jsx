// src/components/Tecnologias.jsx (Centralização Corrigida)
import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "../hooks/useMediaQuery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tecnologias({ sectionRef, techStackData }) {
  const isCarouselView = useMediaQuery('(max-width: 1200px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px', // <-- MUDANÇA PRINCIPAL AQUI: Cria espaço para o brilho
  };

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
          As ferramentas e linguagens que mais utilizo para criar interfaces
          dinâmicas e funcionais.
        </p>
      </div>

      <div className="tech-stack-container">
        {isCarouselView ? (
          <div className="tech-carousel-wrapper">
            <div className="tech-carousel">
              <Slider {...settings}>
                {renderCategoryColumn("Frontend", techStackData.frontend)}
                {renderCategoryColumn("Backend", techStackData.backend)}
                {renderCategoryColumn("Ferramentas", techStackData.ferramentas)}
              </Slider>
            </div>
          </div>
        ) : (
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