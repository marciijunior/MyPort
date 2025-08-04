// src/components/Header.jsx
import React from 'react';

export default function Header({ sectionRef, refs }) {
  return (
    <header id="inicio" ref={sectionRef}>
      <div className="header-content">
        <nav className="links" aria-label="Navegação principal do site">
          <ul className="links-redes" ref={refs.headerRef}>
            <li className="insta"> <a href="#" aria-label="Instagram"> <img src="/insta.png" alt="Instagram logo" /> </a> </li>
            <li className="git"> <a href="#" aria-label="Github"> <img src="/git.png" alt="Github logo" /> </a> </li>
            <li className="linkedin"> <a href="#" aria-label="LinkedIn"> <img src="/linkedin.png" alt="LinkedIn logo" /> </a> </li>
            <li className="whatsapp"> <a href="#" aria-label="WhatsApp"> <img src="/whatsapp.png" alt="WhatsApp logo" /> </a> </li>
          </ul>
        </nav>
      </div>
      <div className="divpremain">
        <div className="premain">
          <div>
            <div className="Iam" ref={refs.euSouRef}>
              <img className="img-im" src="/img-im.png" alt="I am" />
              <p className="p-im">Olá, eu sou</p>
            </div>
            <h1 className="titulo-premain" ref={refs.tituloHeaderRef}> Marcio Junior </h1>
            <h1 className="p-premain" ref={refs.textoHeaderRef}> O Web desenvolvedor e designer de UI/UX. </h1>
            <p className="complemento-premain" ref={refs.textoHeaderComplementoRef}> Transformo suas ideias em sites que geram resultados. Explore meu trabalho e vamos construir algo incrível juntos. </p>
          </div>
          <div className="div-btn">
            <button className="btn">Download CV</button>
            <button className="btn2">My Work</button>
          </div>
          <div className="invite-to-scroll">
            <div className="animationScrollInvite"></div>
          </div>
        </div>
        <div className="img-premain" ref={refs.imgPremainRef}>
          <img src="/img-premain.png" alt="Imagem principal do site" />
        </div>
      </div>
    </header>
  );
}