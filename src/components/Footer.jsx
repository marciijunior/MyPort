// src/components/Footer.jsx
import React from 'react';

export default function Footer({ animRef }) {
  return (
    <footer className='footer-container' ref={animRef}>
      <p>© 2025 - Desenvolvido com React</p>
    </footer>
  );
}