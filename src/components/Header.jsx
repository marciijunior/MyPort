import React from 'react';

export default function Header({ sectionRef, refs, onNavigate }) {
  return (
    <header id="inicio" ref={sectionRef}>
      <div className="header-content">
        <nav className="links" aria-label="Navegação principal do site">
          <ul className="links-redes" ref={refs.header_redesSociais}>
            <li className="insta">
              <a href="https://www.instagram.com/marciijunior/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/insta.png" alt="Instagram logo" />
              </a>
            </li>
            <li className="git">
              <a href="https://github.com/marciijunior" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <img src="/git.png" alt="Github logo" />
              </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/marciijunior" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin.png" alt="LinkedIn logo" />
              </a>
            </li>
            <li className="whatsapp">
              <a href="https://wa.me/5518996741310?text=Olá!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img src="/whatsapp.png" alt="WhatsApp logo" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="divpremain">
        <div className="premain">
          <div>
            <div className="Iam" ref={refs.header_olaEuSou}>
              <img className="img-im" src="/img-im.png" alt="I am" />
              <p className="p-im">Olá, eu sou</p>
            </div>
            <h1 className="titulo-premain" ref={refs.header_titulo}>Marcio Junior</h1>
            <h1 className="p-premain" ref={refs.header_subtitulo}> Desenvolvedor Fullstack e designer UI/UX. </h1>
          </div>
          <div className="div-btn">
            <a href="/Curriculo_Marcio_Junior.pdf" download="Curriculo-Marcio-Junior.pdf" className="btn">
              <span>Download CV</span>
              <i>
                <svg className="download-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </i>
            </a>
            <a href="#jornada" className="btn2" onClick={(e) => {
              e.preventDefault();
              onNavigate('jornada');
            }}>
              <span>My Work</span>
            </a>
          </div>
          <div className="invite-to-scroll">
            <div className="animationScrollInvite"></div>
          </div>
        </div>
        <div className="img-premain" ref={refs.header_imagem}>
          <img src="/img-premain.webp" alt="Imagem principal do site" />
        </div>
      </div>
    </header>
  );
}