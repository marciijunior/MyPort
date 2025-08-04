import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Portfolio({
  sectionRef,
  refs,
  portfolioData,
  onProjectClick,
}) {
  // O hook de animação para o título agora está dentro do componente.
  const tituloPortfolioRef = useScrollReveal({
    origin: "right",
    distance: "100px",
    reset: true, // Corrigido para o valor booleano
  });
  const textoPortfolioRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    reset: true,
  })

  return (
    <section id="portfolio" ref={sectionRef} className="container-segundo-main">
      <div className="interligacao-portfolio">
        {/* A ref de animação é aplicada ao h2 */}
        <h2 className="titulo-portfolio" ref={tituloPortfolioRef}>
          {" "}
          Portfólio{" "}
        </h2>
        <p className="texto-portfolio" ref={textoPortfolioRef}>
          {" "}
          Trabalhos realizados em minha carreira{" "}
        </p>
      </div>
      <div className="container-sites" ref={refs.containerSitesRef}>
        {portfolioData.map((project) => (
          <div
            key={project.id}
            className="portfolio-image-wrapper"
            onClick={() => onProjectClick(project)}
          >
            <img
              src={project.imageSrc}
              className="portfolio-thumbnail"
              alt={`Prévia do projeto ${project.title}`}
            />
            <div className="portfolio-details-overlay">
              <h4 className="portfolio-title">{project.title}</h4>
              <p className="portfolio-description"> {project.description} </p>
              <div className="tech-tags-container">
                {" "}
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {" "}
                    {tech}{" "}
                  </span>
                ))}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}