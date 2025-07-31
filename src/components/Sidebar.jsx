import React from 'react';
import '../styles/Sidebar.css';

// Dados dos links (apenas id e ícone são necessários agora)
const navLinks = [
  { id: 'inicio', icon: 'fa-house' },
  { id: 'servicos', icon: 'fa-briefcase' },
  { id: 'portfolio', icon: 'fa-image' },
  { id: 'avaliacoes', icon: 'fa-comments' }
];

export default function Sidebar({ onNavigate, activeSection }) {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        {navLinks.map(link => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => onNavigate(link.id)}
              aria-label={link.id} // Adicionado para acessibilidade
            >
              <i className={`fa-solid ${link.icon}`}></i>
              {/* O texto foi completamente removido */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}