import React, { useState } from "react";

// PROP 'REFS' ADICIONADA AQUI
export default function Portfolio({
  sectionRef,
  portfolioData,
  onProjectClick,
  refs,
}) {
  const [expandedId, setExpandedId] = useState(portfolioData[0]?.id || null);

  const handleCardClick = (e, project) => {
    if (expandedId === project.id) {
      onProjectClick(project);
      return;
    }

    setExpandedId(project.id);

    setTimeout(() => {
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }, 400);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="container-portfolio">
      {/* REFS APLICADAS AOS ELEMENTOS */}
      <div className="interligacao-portfolio">
        <h2 className="titulo-portfolio" ref={refs.portfolio_titulo}>
          Portfólio
        </h2>
        <p className="texto-portfolio" ref={refs.portfolio_texto}>
          Trabalhos realizados em minha carreira
        </p>
      </div>

      <div className="flex-cards-container" ref={refs.portfolio_container}>
        {portfolioData.map((project, index) => (
          <div
            key={project.id}
            className={`portfolio-card ${
              expandedId === project.id ? "is-expanded" : ""
            }`}
            onClick={(e) => handleCardClick(e, project)}
          >
            <div className="portfolio-img-container">
              <img
                src={project.imageSrc}
                alt={`Imagem do projeto ${project.title}`}
                className="portfolio-card-img"
              />
            </div>

            <div className="card-row">
              <div className="card-icon">{index + 1}</div>
              <div className="card-description">
                <h4>{project.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
