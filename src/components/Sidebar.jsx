import React, { useRef, useEffect } from 'react';
import '../styles/Sidebar.css';

const navLinks = [
  { id: 'inicio', icon: 'fa-house'},
  { id: 'sobre', icon: 'fa-user'},
  { id: 'jornada', icon: 'fa-route'},
  { id: 'tecnologias', icon: 'fa-microchip'},
  { id: 'portfolio', icon: 'fa-image'},
  { id: 'certificados', icon: 'fa-certificate'}
];

export default function Sidebar({ onNavigate, activeSection }) {
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
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.id);
              }}
              aria-label={link.id}
            >
              <i className={`fa-solid ${link.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}