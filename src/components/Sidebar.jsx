import React, { useRef, useEffect } from 'react';
import '../styles/Sidebar.css';

const navLinks = [
  { id: 'inicio', icon: 'fa-house'},
  { id: 'sobre', icon: 'fa-user'},
  { id: 'jornada', icon: 'fa-route'}, // <-- ALTERADO DE 'servicos' PARA 'jornada'
  { id: 'portfolio', icon: 'fa-image'},
  { id: 'certificados', icon: 'fa-certificate'}
];

export default function Sidebar({ onNavigate, activeSection }) {
  // ... resto do seu componente Sidebar (sem alterações) ...
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    if (activeLink && navRef.current) {
      const top = activeLink.offsetTop;
      navRef.current.style.setProperty('--highlight-top', `${top}px`);
    }
  }, [activeSection]);

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav" ref={navRef}>
        {navLinks.map(link => (
          <li
            key={link.id}
            ref={el => linkRefs.current[link.id] = el}
          >
            <a
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => onNavigate(link.id)}
              aria-label={link.text}
            >
              <i className={`fa-solid ${link.icon}`}></i>
              <span className="nav-text">{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}