import React from 'react';
import '../styles/Footer.css';

export default function Footer({ animRef }) {
  return (
    <footer className='footer-container' ref={animRef}>
      <ul className="footer-social-links">
        <li>
          <a href="https://www.instagram.com/marciijunior/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/insta.png" alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/marciijunior" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <img src="/git.png" alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marciijunior" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/linkedin.png" alt="LinkedIn logo" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5518996741310?text=Olá!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src="/whatsapp.png" alt="WhatsApp logo" />
          </a>
        </li>
      </ul>
      <p className="footer-text">© 2025 Marcio Junior - Desenvolvido com React</p>
    </footer>
  );
}