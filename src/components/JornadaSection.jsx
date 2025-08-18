import React, { useState, useEffect } from 'react';
import '../styles/JornadaSection.css';

// NOVO: Componente para o Skeleton Loader
const SkeletonYearCards = () => {
  return (
    // Renderiza 4 cartões de skeleton para preencher o espaço
    <>
      <div className="year-card-skeleton"></div>
      <div className="year-card-skeleton"></div>
      <div className="year-card-skeleton"></div>
      <div className="year-card-skeleton"></div>
    </>
  );
};

export default function JornadaSection({ onYearSelect }) { 
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://script.google.com/macros/s/AKfycbxPCbv7lMZw-tTq-RqPR5Z2iOJzIEnykQVrR-uhxiIXizTJorZo7a6Q3BniMZVGLnU/exec";

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setYears(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar anos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="jornada-section">
      <div className="interligacao-jornada">
        <h2 className="titulo-jornada">Minha Jornada</h2>
        <p className="texto-jornada">
          Selecione um ano para ver as atualizações e conquistas do período.
        </p>
      </div>
      <div className="years-container">
        {loading ? (
          // ATUALIZADO: Mostra o skeleton em vez do texto
          <SkeletonYearCards />
        ) : (
          years.map(year => (
            <button onClick={() => onYearSelect(year)} key={year} className="year-card">
              {year}
            </button>
          ))
        )}
      </div>
    </section>
  );
}