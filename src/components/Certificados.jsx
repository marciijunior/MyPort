// src/components/Certificados.jsx (Atualizado para 1 slide por vez no mobile)

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Certificados({ sectionRef, certificatesData }) {
  return (
    <section
      id="certificados"
      ref={sectionRef}
      className="container-certificados"
    >
      <div className="interligacao-certificado">
        <h2 className="titulo-certificado">
          Certificados e Cursos
        </h2>
        <p className="texto-certificado">
          Algumas das minhas certificações e cursos mais recentes.
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1} // <-- PADRÃO AGORA É 1 SLIDE
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            // Acima de 768px, mostra 2 slides
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Acima de 1024px, mostra 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
          className="certificates-swiper"
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