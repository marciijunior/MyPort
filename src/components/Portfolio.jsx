// src/components/Portfolio.jsx (Lógica de clique e modal corrigida)

import React, { useState } from 'react';

export default function Portfolio({ sectionRef, portfolioData, onProjectClick }) {
  const [expandedId, setExpandedId] = useState(portfolioData[0]?.id || null);

  const handleCardClick = (e, project) => {
    // Se o card clicado já estiver expandido, abre o modal.
    if (expandedId === project.id) {
      onProjectClick(project); // Usa a prop para abrir o modal
      return; // Encerra a função aqui
    }

    // Se não, apenas expande o novo card.
    setExpandedId(project.id);

    setTimeout(() => {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
      });
    }, 400);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="container-portfolio">
      <div className="interligacao-portfolio">
        <h2 className="titulo-portfolio">Portfólio</h2>
        <p className="texto-portfolio">
          Trabalhos realizados em minha carreira
        </p>
      </div>

      <div className="flex-cards-container">
        {portfolioData.map((project, index) => (
          <div
            key={project.id}
            className={`portfolio-card ${expandedId === project.id ? 'is-expanded' : ''}`}
            // A função de clique agora recebe o objeto 'project' inteiro
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