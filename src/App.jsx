// App.jsx
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";

// Imports de CSS (Contact.css removido)
import "./styles/Header.css";
import "./styles/PosHeader.css";
import "./styles/Main.css";
import "./styles/ExpandedContent.css";
import "./styles/ScrollReveal.css";
import "./styles/Main2.css";
import "./styles/Modal.css";
import "./styles/Testimonials.css";
import "./styles/Sidebar.css";
import "./styles/InviteScroll.css";

import ScrollReveal from "scrollreveal";
import ExpandedContent from "./ExpandedContent";
import { useButtonExpansion } from "./hooks/useButtonExpansion";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  const {
    expandedButtonId,
    expandedOrigin,
    buttonRefs,
    botoesData,
    handleButtonClick,
    setExpandedButtonId,
  } = useButtonExpansion();

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("inicio");

  // Ref de 'contato' foi removida
  const sectionRefs = {
    inicio: useRef(null),
    servicos: useRef(null),
    portfolio: useRef(null),
    avaliacoes: useRef(null),
  };

  const handleNavigate = (id) => {
    sectionRefs[id].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.4 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
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
  }, []);

  const testimonialsData = [
    {
      quote:
        "Ficamos de queixo caído com o resultado! O Marcio não só entendeu o que a gente queria, como entregou um site super rápido e lindo. Foi muito além do que esperávamos!",
      avatar: "/avatar1.png",
      name: "Carlos Pereira",
      role: "CEO, Startup Criativa",
    },
    {
      quote:
        "O cara manja muito! Além de super talentoso, o que mais gostei foi o suporte depois que o site foi pro ar. Sempre que precisei, ele estava lá pra ajudar. Recomendo de olhos fechados!",
      avatar: "/avatar2.png",
      name: "Fabiane Alexandre",
      role: "Gerente de Marketing, InovaTech",
    },
    {
      quote:
        "Eu não entendia muito de design, mas o Marcio transformou nossas ideias em um site que é super fácil de usar e muito bonito. Nossos clientes adoraram e o site voa de tão rápido. Sensacional!",
      avatar: "/avatar3.png",
      name: "Juliana Costa",
      role: "Fundadora, Tech & Cia",
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

  useEffect(() => {
    ScrollReveal({ opacity: 0 });
  }, []);

  // Refs do ScrollReveal (ref de contato removida)
  const headerRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1000,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });
  const euSouRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });
  const tituloPreMainRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 200,
    reset: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });
  const textoPreMainRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 400,
    reset: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });
  const textoPreMainComplementoRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 600,
    reset: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });
  const mainImageRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const mainTextRef = useScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const footerRef = useScrollReveal({
    origin: "bottom",
    distance: "10px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const dotsColumn1Ref = useScrollReveal({
    origin: "bottom",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.7,
    delay: 100,
    reset: true,
  });
  const dotsColumn2Ref = useScrollReveal({
    origin: "bottom",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.1,
    delay: 100,
    reset: true,
  });
  const tituloPrimeiroMainRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 0,
    reset: true,
  });
  const textoPrimeiroMainRef = useScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 0,
    reset: true,
  });
  const tituloSegundoMainRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const textoSegundoMainRef = useScrollReveal({
    origin: "right",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const containerSitesRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const testimonialsRef = useScrollReveal({
    origin: "bottom",
    distance: "0px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 200,
    reset: true,
  });
  const imgPremainRef = useScrollReveal({
    origin: "top",
    distance: "0px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 100,
    reset: true,
  });

  return (
    <div className="app-container">
      <Sidebar onNavigate={handleNavigate} activeSection={activeSection} />

      <div className="content-wrapper">
        <header id="inicio" ref={sectionRefs.inicio}>
          <div className="header-content">
            <nav className="links" aria-label="Navegação principal do site">
              <ul className="links-redes" ref={headerRef}>
                <li className="insta">
                  {" "}
                  <a href="#" aria-label="Instagram">
                    {" "}
                    <img src="/insta.png" alt="Instagram logo" />{" "}
                  </a>{" "}
                </li>
                <li className="git">
                  {" "}
                  <a href="#" aria-label="Github">
                    {" "}
                    <img src="/git.png" alt="Github logo" />{" "}
                  </a>{" "}
                </li>
                <li className="linkedin">
                  {" "}
                  <a href="#" aria-label="LinkedIn">
                    {" "}
                    <img src="/linkedin.png" alt="LinkedIn logo" />{" "}
                  </a>{" "}
                </li>
                <li className="whatsapp">
                  {" "}
                  <a href="#" aria-label="WhatsApp">
                    {" "}
                    <img src="/whatsapp.png" alt="WhatsApp logo" />{" "}
                  </a>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="divpremain">
            <div className="premain">
              <div>
                <div className="Iam" ref={euSouRef}>
                  <img className="img-im" src="/img-im.png" alt="I am" />
                  <p className="p-im">Olá, eu sou</p>
                </div>
                <h1 className="titulo-premain" ref={tituloPreMainRef}>
                  Marcio Junior
                </h1>
                <h1 className="p-premain" ref={textoPreMainRef}>
                  O Web desenvolvedor e designer de UI/UX.
                </h1>
                <p
                  className="complemento-premain"
                  ref={textoPreMainComplementoRef}
                >
                  Transformo suas ideias em sites que geram resultados. Explore
                  meu trabalho e vamos construir algo incrível juntos.
                </p>
              </div>
              <div className="div-btn">
                <button className="btn">Download CV</button>
                <button className="btn2">My Work</button>
              </div>
              <div className="invite-to-scroll">
                <div className="animationScrollInvite"></div>
              </div>
            </div>
            <div className="img-premain">
              <img
                src="/img-premain.png"
                alt="Imagem principal do site"
                ref={imgPremainRef}
              />
            </div>
          </div>
        </header>

        <main>
          <section className="dots-column-section" ref={dotsColumn1Ref}>
            <div className="dots-container">
              <div className="dot"></div> <div className="dot"></div>
              <div className="dot"></div> <div className="dot"></div>
              <div className="dot"></div> <div className="dot"></div>
            </div>
          </section>

          <section
            id="servicos"
            ref={sectionRefs.servicos}
            className="container-primeiro-main"
          >
            <div className="interligacao">
              <h2 className="titulo-interligacao" ref={tituloPrimeiroMainRef}>
                Nossos serviços
              </h2>
              <p className="texto-interligacao" ref={textoPrimeiroMainRef}>
                A interligação entre o design e a programação é essencial para
                criar experiências digitais coesas e funcionais.
              </p>
            </div>
            <div className="servicos-container">
              <div className="primeiro-main" ref={mainImageRef}></div>
              <div className="texto-primeiro-main" ref={mainTextRef}>
                <div className="btn-linha1">
                  {botoesData.map((botao) => (
                    <button
                      key={botao.id}
                      ref={(el) => (buttonRefs.current[botao.id] = el)}
                      className={`${botao.className} ${
                        expandedButtonId && expandedButtonId !== botao.id
                          ? "hidden-button"
                          : ""
                      }`}
                      onClick={() => handleButtonClick(botao.id)}
                      style={{
                        visibility:
                          expandedButtonId === botao.id ? "hidden" : "visible",
                        opacity: expandedButtonId === botao.id ? 0 : 1,
                        pointerEvents:
                          expandedButtonId === botao.id ? "none" : "auto",
                      }}
                    >
                      <span className="img-card">
                        <img src={botao.imageSrc} alt={botao.label} />
                      </span>
                      {botao.label}
                    </button>
                  ))}
                  <div
                    className={`expanding-overlay ${
                      expandedButtonId ? "expanded" : ""
                    }`}
                    style={{ transformOrigin: expandedOrigin }}
                  >
                    <ExpandedContent buttonId={expandedButtonId} />
                    {expandedButtonId && (
                      <span
                        className="close-expanded-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedButtonId(null);
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="portfolio"
            ref={sectionRefs.portfolio}
            className="container-segundo-main"
          >
            <div className="interligacao-segundo-main">
              <h2
                className="titulo-interligacao-segundo-main"
                ref={tituloSegundoMainRef}
              >
                Portfólio
              </h2>
              <p
                className="texto-interligacao-segundo-main"
                ref={textoSegundoMainRef}
              >
                Trabalhos realizados em minha carreira
              </p>
            </div>
            <div className="container-sites" ref={containerSitesRef}>
              {portfolioData.map((project) => (
                <div
                  key={project.id}
                  className="portfolio-image-wrapper"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imageSrc}
                    className="portfolio-thumbnail"
                    alt={`Prévia do projeto ${project.title}`}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="dots-column-section" ref={dotsColumn2Ref}>
            <div className="dots-container">
              <div className="dot"></div> <div className="dot"></div>
              <div className="dot"></div> <div className="dot"></div>
              <div className="dot"></div> <div className="dot"></div>
            </div>
          </section>

          <section
            id="avaliacoes"
            ref={sectionRefs.avaliacoes}
            className="testimonials-section"
          >
            <div className="interligacao-segundo-main">
              <h2 className="titulo-interligacao-segundo-main">Avaliações</h2>
            </div>
            <div className="testimonials-container" ref={testimonialsRef}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <img
                    src={testimonial.avatar}
                    alt={`Avatar de ${testimonial.name}`}
                    className="testimonial-avatar"
                  />
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4> <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer ref={footerRef}>
          <p>© 2025 - Desenvolvido com React Three Fiber</p>
        </footer>

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
