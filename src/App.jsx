// App.jsx
import React, { useState, useEffect, useRef } from "react";
import "./styles/Header.css";
import "./styles/PosHeader.css";
import "./styles/Main.css";
import "./styles/ExpandedContent.css";
import "./styles/ScrollReveal.css";
import "./styles/Main2.css";
import "./styles/Modal.css";
import "./styles/Testimonials.css";
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

  const [selectedImage, setSelectedImage] = useState(null);

  // O bloco de código do modal foi removido daqui.

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

  useEffect(() => {
    ScrollReveal({
      opacity: 0,
    });
  }, []);

  const headerRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1000,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const euSouRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.2,
    delay: 0,
    reset: true,
  });
  const tituloPreMainRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 200,
    reset: true,
  });
  const textoPreMainRef = useScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 1500,
    viewFactor: 0.4,
    delay: 400,
    reset: true,
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
  const premainRef = useRef(null);

  return (
    <div>
      <header ref={headerRef}>
        <div className="header-content">
          <nav className="links" aria-label="Navegação principal do site">
            <ul className="link-list">
              <li className="link-sobremim">
                <a href="#sobre">Sobre Mim</a>
              </li>
              <li>
                <a href="#projetos">Meus Projetos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#curriculo">Currículo</a>
              </li>
            </ul>
            <ul className="links-redes">
              <li className="insta">
                <a href="#" aria-label="Instagram">
                  <img src="/insta.png" alt="Instagram logo"></img>
                </a>
              </li>
              <li className="git">
                <a href="#" aria-label="Github">
                  <img src="/git.png" alt="Github logo"></img>
                </a>
              </li>
              <li className="linkedin">
                <a href="#" aria-label="LinkedIn">
                  <img src="/linkedin.png" alt="LinkedIn logo"></img>
                </a>
              </li>
              <li className="whatsapp">
                <a href="#" aria-label="WhatsApp">
                  <img src="/whatsapp.png" alt="WhatsApp logo"></img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="divpremain" ref={premainRef}>
          <div className="premain">
            <div>
              <div className="Iam" ref={euSouRef}>
                <img className="img-im" src="/img-im.png" alt="I am" />
                <p className="p-im">Olá, eu sou</p>
              </div>
              <h1 className="titulo-premain" ref={tituloPreMainRef}>
                Marcio Junior
              </h1>
              <p className="p-premain" ref={textoPreMainRef}>
                O Web desenvolvedor e designer de UI/UX.
              </p>
            </div>
            <div className="div-btn">
              <button className="btn">Download CV</button>
              <button className="btn2">My Work</button>
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
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </section>

        <div className="container-primeiro-main">
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
                  style={{
                    transformOrigin: expandedOrigin,
                  }}
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
        </div>

        <div className="container-segundo-main">
          <div className="interligacao-segundo-main">
            <h2
              className="titulo-interligacao-segundo-main"
              ref={tituloSegundoMainRef}
            >
              Portifólio
            </h2>
            <p
              className="texto-interligacao-segundo-main"
              ref={textoSegundoMainRef}
            >
              Trabalhos realizados em minha carreira
            </p>
          </div>
          <div className="container-sites" ref={containerSitesRef}>
            <div
              className="portfolio-image-wrapper"
              onClick={() => setSelectedImage("./site1.png")}
            >
              <img
                src="./site1.png"
                className="img-site1 portfolio-thumbnail"
              ></img>
            </div>
            <div
              className="portfolio-image-wrapper"
              onClick={() => setSelectedImage("./site2.png")}
            >
              <img
                src="./site2.png"
                className="img-site2 portfolio-thumbnail"
              ></img>
            </div>
            <div
              className="portfolio-image-wrapper"
              onClick={() => setSelectedImage("./site3.png")}
            >
              <img
                src="./site3.png"
                className="img-site3 portfolio-thumbnail"
              ></img>
            </div>
            <div
              className="portfolio-image-wrapper"
              onClick={() => setSelectedImage("./site4.png")}
            >
              <img
                src="./site4.png"
                className="img-site4 portfolio-thumbnail"
              ></img>
            </div>
          </div>
        </div>

        <section className="dots-column-section" ref={dotsColumn2Ref}>
          <div className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </section>

        <div className="testimonials-section" ref={testimonialsRef}>
          <div className="interligacao-segundo-main">
            <h2 className="titulo-interligacao-segundo-main">Avaliações</h2>
          </div>
          <div className="testimonials-container">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  className="testimonial-avatar"
                />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer ref={footerRef}>
        <p>© 2025 - Desenvolvido com React Three Fiber</p>
      </footer>

      {/* Corrigido: O código do modal foi movido para dentro do return */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <span className="modal-close" onClick={() => setSelectedImage(null)}>
            X
          </span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Visualização do site"
              className="modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
