// src/components/Certificados.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Certificados({
  sectionRef,
  certificatesData,
  animRef,
}) {
  const certificatesTitleRef = useScrollReveal({
    origin: "bottom",
    distance: "50px",
  });

  // Hook para animar o novo parágrafo
  const certificatesTextRef = useScrollReveal({
    origin: "bottom",
    distance: "50px",
    delay: 200, // Um pequeno atraso para animar depois do título
  });

  return (
    <section
      id="certificados"
      ref={sectionRef}
      className="certificates-section"
    >
      <div className="interligacao-certificado">
        <h2 className="titulo-certificado" ref={certificatesTitleRef}>
          Certificados e Cursos
        </h2>
        {/* TEXTO MENOS FORMAL ADICIONADO AQUI */}
        <p className="texto-certificado" ref={certificatesTextRef}>
          A jornada do conhecimento nunca para! Confira algumas das minhas
          certificações e cursos mais recentes.
        </p>
      </div>
      <div ref={animRef}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="certificates-container"
        >
          {certificatesData.map((cert, index) => (
            <SwiperSlide key={index}>
              <a
                href={cert.pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card-link"
              >
                <div className="certificate-card">
                  <div className="certificate-image">
                    <img
                      src={cert.thumbnailSrc}
                      alt={`Certificado de ${cert.title}`}
                    />
                  </div>
                  <div className="certificate-info">
                    <h4>{cert.title}</h4>
                    <span>Emitido por: {cert.issuer}</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}