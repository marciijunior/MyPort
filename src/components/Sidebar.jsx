import React, { useState } from "react";
import "../styles/Sidebar.css";

// Dados dos links da navegação para manter o código limpo
const navLinks = [
  { id: "inicio", icon: "fa-house", text: "Início" },
  { id: "servicos", icon: "fa-briefcase", text: "Serviços" },
  { id: "portfolio", icon: "fa-image", text: "Portfólio" },
  { id: "avaliacoes", icon: "fa-comments", text: "Avaliações" },
];

export default function Sidebar({ onNavigate, activeSection }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <div className="sidebar-header">
        <a
          href="#inicio"
          className="sidebar-logo"
          onClick={() => onNavigate("inicio")}
        >
          {/* Use seu logo aqui */}
          <img src="/logo.png" alt="Ícone do Logo" className="logo-icon" />
          <img src="/logo.png" alt="Ícone do Logo" className="logo-full" />
        </a>
        <button
          id="sidebar-toggle"
          className="sidebar-toggle-btn"
          onClick={handleToggle}
        >
          <i
            className={`arrow-icon fa-solid fa-chevron-right ${
              isExpanded ? "rotate-180" : ""
            }`}
          ></i>
        </button>
      </div>

      <ul className="sidebar-nav">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`nav-link ${
                activeSection === link.id ? "active" : ""
              }`}
              onClick={() => onNavigate(link.id)}
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