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
            <h1 className="titulo-premain" ref={refs.header_titulo}> Marcio Junior </h1>
            <h1 className="p-premain" ref={refs.header_subtitulo}> O Web desenvolvedor e designer UI/UX. </h1>
          </div>
          <div className="div-btn">
            <button className="btn">Download CV</button>
            <button className="btn2" onClick={() => onNavigate('jornada')}>My Work</button>
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