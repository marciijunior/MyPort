// App.jsx
import React, { useState, useEffect, useRef } from "react";

// Importando os componentes de seção
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Habilidades from "./components/Habilidades";
import Portfolio from "./components/Portfolio";
import Certificados from "./components/Certificados";
import Footer from "./components/Footer";
import SeparadorDots from "./components/SeparadorDots";

// Imports de CSS
import "./styles/Header.css";
import "./styles/PosHeader.css";
import "./styles/Habilidades.css";
import "./styles/ExpandedContent.css";
import "./styles/ScrollReveal.css";
import "./styles/Portfolio.css";
import "./styles/Modal.css";
import "./styles/Sidebar.css";
import "./styles/InviteScroll.css";
import "./styles/AboutMe.css";
import "./styles/TechStack.css";
import "./styles/Certificates.css";

// Imports de Hooks e bibliotecas
import ScrollReveal from "scrollreveal";
import { useButtonExpansion } from "./hooks/useButtonExpansion";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  // --- ESTADO E DADOS ---
  const expansionState = useButtonExpansion();
  const { botoesData } = expansionState;
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("inicio");

  const certificatesData = [
    {
      title:
        "Acessibilidade no HTML: escrevendo códigos semânticos para inclusão",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado1.png",
      pdfSrc: "/certificates/pdf/certificado1Pdf.pdf",
    },
    {
      title: "Começando em Programação: carreira e primeiros passos",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado2.png",
      pdfSrc: "/certificates/pdf/certificado2Pdf.pdf",
    },
    {
      title:
        "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado3.png",
      pdfSrc: "/certificates/pdf/certificado3Pdf.pdf",
    },
    {
      title: "HTML e CSS: cabeçalho, footer e variáveis CSS",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado4.png",
      pdfSrc: "/certificates/pdf/certificado4Pdf.pdf",
    },
    {
      title: "HTML e CSS: Classes, posicionamento e Flexbox",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado5.png",
      pdfSrc: "/certificates/pdf/certificado5Pdf.pdf",
    },
    {
      title: "HTML e CSS: praticando HTML/CSS",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado6.png",
      pdfSrc: "/certificates/pdf/certificado6Pdf.pdf",
    },
    {
      title: "HTML e CSS: responsividade com mobile-first",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado7.png",
      pdfSrc: "/certificates/pdf/certificado7Pdf.pdf",
    },
    {
      title:
        "HTML e CSS: trabalhando com responsividade e publicação de projetos",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado8.png",
      pdfSrc: "/certificates/pdf/certificado8Pdf.pdf",
    },
    {
      title: "JavaScript: construindo páginas dinâmicas",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado9.png",
      pdfSrc: "/certificates/pdf/certicado9Pdf.pdf",
    },
    {
      title: "JavaScript: entendendo promises e async/await",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado10.png",
      pdfSrc: "/certificates/pdf/certicado10Pdf.pdf",
    },
    {
      title: "JavaScript: explorando a linguagem",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado11.png",
      pdfSrc: "/certificates/pdf/certificado11Pdf.pdf",
    },
    {
      title: "JavaScript: interfaces e Herança em Orientação a Objetos",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado12.png",
      pdfSrc: "/certificates/pdf/certificado12Pdf.pdf",
    },
    {
      title: "JavaScript: métodos de array",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado13.png",
      pdfSrc: "/certificates/pdf/certificado13Pdf.pdf",
    },
    {
      title: "JavaScript: programando a Orientação a Objetos",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado14.png",
      pdfSrc: "/certificates/pdf/certificado14Pdf.pdf",
    },
    {
      title: "Lógica de programação: explore funções e listas",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado15.png",
      pdfSrc: "/certificates/pdf/certificado15Pdf.pdf",
    },
    {
      title: "Lógica de programação: mergulhe em programação com JavaScript",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado16.png",
      pdfSrc: "/certificates/pdf/certificado16Pdf.pdf",
    },
    {
      title:
        "Node.js e terminal: dominando o ambiente de desenvolvimento front-end",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado17.png",
      pdfSrc: "/certificates/pdf/certificado17Pdf.pdf",
    },
    {
      title: "React: desenvolvendo com JavaScript",
      issuer: "Alura",
      thumbnailSrc: "/certificates/images/certificado18.png",
      pdfSrc: "/certificates/pdf/certificado18Pdf.pdf",
    },
  ];
  const portfolioData = [
    {
      id: "proj1",
      imageSrc: "./site1.png",
      title: "Website Corporativo Moderno",
      description:
        "Um projeto focado em criar uma presença online forte e profissional para a empresa InovaTech, com foco em performance e design responsivo.",
      technologies: ["React", "Vite", "CSS Grid", "Figma"],
    },
    {
      id: "proj2",
      imageSrc: "./site2.png",
      title: "Plataforma de E-commerce",
      description:
        "Desenvolvimento de uma loja virtual completa, com integração de pagamentos e um painel de gerenciamento de produtos intuitivo.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Rest"],
    },
    {
      id: "proj3",
      imageSrc: "./site3.png",
      title: "Landing Page para Evento",
      description:
        "Criação de uma landing page de alta conversão para um evento de tecnologia, utilizando animações para engajar os visitantes.",
      technologies: ["React", "ScrollReveal", "Spline"],
    },
    {
      id: "proj4",
      imageSrc: "./site4.png",
      title: "Blog Pessoal Minimalista",
      description:
        "Um blog com foco na legibilidade e na velocidade, construído com um design limpo para uma experiência de leitura agradável.",
      technologies: ["React", "CSS Flexbox", "UI/UX"],
    },
  ];
  const techStackData = {
    frontend: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsividade",
      "React Three Fiber",
      "Three.js",
    ],
    backend: ["Node.js", "Python", "SQL", "SQLite", "C++", "Pascal"],
    ferramentas: [
      "Git",
      "GitHub",
      "Figma",
      "Photoshop",
      "VS Code",
      "Vite",
      "Webpack",
      "NPM",
    ],
  };

  // --- LÓGICA DE NAVEGAÇÃO ---
  const sectionRefs = {
    inicio: useRef(null),
    sobre: useRef(null),
    servicos: useRef(null),
    portfolio: useRef(null),
    certificados: useRef(null),
  };
  const handleNavigate = (id) => {
    sectionRefs[id].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.4 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const refs = Object.values(sectionRefs);
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- INICIALIZAÇÃO E REFS DE ANIMAÇÃO ---
  // A configuração global ainda é útil como um padrão.
  useEffect(() => {
    ScrollReveal({
      distance: "100px",
      duration: 1000,
      opacity: 0,
      reset: true,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
  }, []);

  // Com o novo hook, podemos especificar 'reset: true' aqui com segurança.
  const scrollRefs = {
    headerRef: useScrollReveal({ origin: "left", reset: true }),
    euSouRef: useScrollReveal({ origin: "left" }),
    tituloHeaderRef: useScrollReveal({
      origin: "left",
      duration: 1400,
    }),
    textoHeaderRef: useScrollReveal({
      origin: "left",
      duration: 1600,
    }),
    textoHeaderComplementoRef: useScrollReveal({
      origin: "left",
      duration: 1800,
    }),
    imgPremainRef: useScrollReveal({
      origin: "right",
    }),
    dotsColumn1Ref: useScrollReveal({ reset: true }),
    tituloPrimeiroMainRef: useScrollReveal({ origin: "left" }),
    textoPrimeiroMainRef: useScrollReveal({ origin: "right" }),
    mainImageRef: useScrollReveal({ origin: "left" }),
    mainTextRef: useScrollReveal({ origin: "right" }),
    tituloSkillsRef: useScrollReveal({ reset: true }),
    textoSkillsRef: useScrollReveal({ reset: true }),
    containerSitesRef: useScrollReveal({ origin: "bottom" }),
    dotsColumn2Ref: useScrollReveal({ reset: true }),
    certificatesContainerRef: useScrollReveal({
      origin: "bottom",
    }),
  };

  return (
    <div className="app-container">
      <Sidebar onNavigate={handleNavigate} activeSection={activeSection} />
      <div className="content-wrapper">
        <Header sectionRef={sectionRefs.inicio} refs={scrollRefs} />
        <main>
          <AboutMe sectionRef={sectionRefs.sobre} />
          <SeparadorDots animRef={scrollRefs.dotsColumn1Ref} />
          <Habilidades
            sectionRef={sectionRefs.servicos}
            refs={scrollRefs}
            data={{ botoesData, techStackData }}
            expansionState={expansionState}
          />
          <SeparadorDots animRef={scrollRefs.dotsColumn2Ref} />
          <Portfolio
            sectionRef={sectionRefs.portfolio}
            refs={scrollRefs}
            portfolioData={portfolioData}
            onProjectClick={setSelectedProject}
          />
          <Certificados
            sectionRef={sectionRefs.certificados}
            certificatesData={certificatesData}
            animRef={scrollRefs.certificatesContainerRef}
          />
        </main>
        <Footer animRef={scrollRefs.footerRef} />
        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <span
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              {" "}
              X{" "}
            </span>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedProject.imageSrc}
                alt={`Visualização do projeto ${selectedProject.title}`}
                className="modal-img"
              />
              <div className="modal-details">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">
                  {" "}
                  {selectedProject.description}{" "}
                </p>
                <div className="tech-tags-container">
                  {" "}
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {" "}
                      {tech}{" "}
                    </span>
                  ))}{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
