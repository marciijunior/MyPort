import React, { useState, useEffect, useRef, useCallback } from "react";

// Componentes
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Tecnologias from "./components/Tecnologias";
import Portfolio from "./components/Portfolio";
import Certificados from "./components/Certificados";
import Footer from "./components/Footer";
import Feed from "./components/Feed";

// CSS
import "./styles/Header.css";
import "./styles/PosHeader.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/ScrollReveal.css";
import "./styles/Portfolio.css";
import "./styles/Modal.css";
import "./styles/Sidebar.css";
import "./styles/InviteScroll.css";
import "./styles/AboutMe.css";
import "./styles/TechStack.css";
import "./styles/Certificates.css";
import "./styles/Feed.css";
import "./styles/Scrollbar.css";

// Hooks
import ScrollReveal from "scrollreveal";
import { useScrollReveal } from "./hooks/useScrollReveal";

const sectionIds = [
  "inicio",
  "sobre",
  "jornada",
  "tecnologias",
  "portfolio",
  "certificados",
];

export default function App() {
  // --- ESTADOS ---
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("inicio");

  // --- DADOS ---
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
      imageSrc: "./site1.webp",
      title: "Website Corporativo Moderno",
      technologies: ["React", "Vite", "CSS Grid", "Figma"],
    },
    {
      id: "proj2",
      imageSrc: "./site2.webp",
      title: "Plataforma de E-commerce",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Rest"],
    },
    {
      id: "proj3",
      imageSrc: "./site3.webp",
      title: "Landing Page para Evento",
      technologies: ["React", "ScrollReveal", "Spline"],
    },
    {
      id: "proj4",
      imageSrc: "./site4.webp",
      title: "Blog Pessoal Minimalista",
      technologies: ["React", "CSS Flexbox", "UI/UX"],
    },
  ];
  const techStackData = {
    frontend: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Three.js",
      "Tailwind CSS",
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

  // --- LÓGICA DE NAVEGAÇÃO E SCROLL ---
  const scrollContainerRef = useRef(null);

  const sectionRefs = {
    inicio: useRef(null),
    sobre: useRef(null),
    jornada: useRef(null),
    tecnologias: useRef(null),
    portfolio: useRef(null),
    certificados: useRef(null),
  };

  const handleNavigate = useCallback((id) => {
    const targetElement = sectionRefs[id].current;
    const containerElement = scrollContainerRef.current;

    if (targetElement && containerElement) {
      const currentScrollTop = containerElement.scrollTop;
      const targetOffsetTop = targetElement.offsetTop;

      const isScrollingDown = targetOffsetTop > currentScrollTop;

      let topPosition;

      if (isScrollingDown) {
        topPosition =
          targetOffsetTop +
          targetElement.offsetHeight -
          containerElement.clientHeight;
      } else {
        topPosition = targetOffsetTop;
      }

      if (id === "inicio") {
        topPosition = 0;
      }

      containerElement.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // useEffect para o IntersectionObserver (CORRIGIDO)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: "0px",
      threshold: 0.4,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // useEffect para o ScrollReveal (CORRIGIDO)
  useEffect(() => {
    // Verifica se o container já existe no DOM
    if (scrollContainerRef.current) {
      const sr = ScrollReveal({
        container: scrollContainerRef.current,
        distance: "100px",
        duration: 1000,
        opacity: 0,
        reset: false,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
      });
      // Função de limpeza para destruir a instância do ScrollReveal
      return () => sr.destroy();
    }
  }, []); // Roda apenas uma vez após a montagem inicial

  const scrollRefs = {
    // Header
    header_redesSociais: useScrollReveal({ origin: "left" }),
    header_olaEuSou: useScrollReveal({ origin: "left", delay: 200 }),
    header_titulo: useScrollReveal({ origin: "left", delay: 400 }),
    header_subtitulo: useScrollReveal({ origin: "left", delay: 600 }),
    header_imagem: useScrollReveal({ origin: "right", delay: 500 }),

    // Sobre Mim
    sobreMim_imagem1: useScrollReveal({ origin: "bottom", delay: 100 }),
    sobreMim_imagem2: useScrollReveal({ origin: "top", delay: 200 }),
    sobreMim_imagem3: useScrollReveal({ origin: "bottom", delay: 300 }),
    sobreMim_titulo: useScrollReveal({ origin: "right" }),
    sobreMim_subtitulo: useScrollReveal({ origin: "right", delay: 200 }),
    sobreMim_paragrafo1: useScrollReveal({ origin: "right", delay: 400 }),
    sobreMim_paragrafo2: useScrollReveal({ origin: "right", delay: 600 }),

    // Feed (Jornada)
    feed_titulo: useScrollReveal({ origin: "bottom" }),
    feed_descricao: useScrollReveal({ origin: "bottom", delay: 200 }),
    feed_timeline: useScrollReveal({ origin: "bottom", delay: 400 }),
    feed_container: useScrollReveal({ origin: "bottom", delay: 600 }),

    // Tecnologias
    tecnologias_titulo: useScrollReveal({ origin: "bottom" }),
    tecnologias_texto: useScrollReveal({ origin: "bottom", delay: 200 }),
    tecnologias_container: useScrollReveal({ origin: "bottom", delay: 400 }),

    // Portfólio
    portfolio_titulo: useScrollReveal({ origin: "bottom" }),
    portfolio_texto: useScrollReveal({ origin: "bottom", delay: 200 }),
    portfolio_container: useScrollReveal({ origin: "bottom", delay: 400 }),

    // Certificados
    certificados_titulo: useScrollReveal({ origin: "bottom" }),
    certificados_texto: useScrollReveal({ origin: "bottom", delay: 200 }),
    certificados_container: useScrollReveal({ origin: "bottom", delay: 400 }),

    // Footer
    footer: useScrollReveal({ origin: "right" }),
  };

  return (
    <div className="app-container">
      <Sidebar onNavigate={handleNavigate} activeSection={activeSection} />
      <div className="content-wrapper" ref={scrollContainerRef}>
        <Header
          sectionRef={sectionRefs.inicio}
          refs={scrollRefs}
          onNavigate={handleNavigate}
        />
        <main>
          <AboutMe sectionRef={sectionRefs.sobre} refs={scrollRefs} />

          <div id="jornada" ref={sectionRefs.jornada}>
            <Feed refs={scrollRefs} />
          </div>

          <Tecnologias
            sectionRef={sectionRefs.tecnologias}
            techStackData={techStackData}
            refs={scrollRefs}
          />
          <Portfolio
            sectionRef={sectionRefs.portfolio}
            portfolioData={portfolioData}
            onProjectClick={setSelectedProject}
            refs={scrollRefs}
          />
          <Certificados
            sectionRef={sectionRefs.certificados}
            certificatesData={certificatesData}
            refs={scrollRefs}
          />
        </main>
        <Footer animRef={scrollRefs.footer} />

        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <span
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              X
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
                  {selectedProject.description}
                </p>
                <div className="tech-tags-container">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
