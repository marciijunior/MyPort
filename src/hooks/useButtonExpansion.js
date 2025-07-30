import { useState, useRef, useCallback } from 'react';

const BOTOES_DATA = [
  {
    id: "btn1-1",
    label: "Websites Personalizados",
    className: "btn-primeiro-main-linha1",
    imageSrc: "/img-card1.png",
  },
  {
    id: "btn1-2",
    label: "Aumento de busca e visibilidade",
    className: "btn-primeiro-main-linha1",
    imageSrc: "/img-card2.png",
  },
  {
    id: "btn1-3",
    label: "UX e UI",
    className: "btn-primeiro-main-linha1",
    imageSrc: "/img-card3.png",
  },
  {
    id: "btn2-1",
    label: "Integração de Sistemas e APIs",
    className: "btn-primeiro-main-linha2",
    imageSrc: "/img-card4.png",
  },
  {
    id: "btn2-2",
    label: "Manutenção e Suporte de Websites",
    className: "btn-primeiro-main-linha2",
    imageSrc: "/img-card5.png",
  },
  {
    id: "btn2-3",
    label: "Animações e Experiências Interativas",
    className: "btn-primeiro-main-linha2",
    imageSrc: "/img-card6.png",
  },
];

export const useButtonExpansion = () => {
  const [expandedButtonId, setExpandedButtonId] = useState(null);
  const [expandedContent, setExpandedContent] = useState("");
  const [expandedOrigin, setExpandedOrigin] = useState("center center");
  const buttonRefs = useRef({});

  const handleButtonClick = useCallback((id) => { // 'label' foi removido daqui
    if (expandedButtonId === id) {
      setExpandedButtonId(null);
      setExpandedContent("");
      setExpandedOrigin("center center");
    } else {
      setExpandedButtonId(id);
      
      // O 'label' não era usado aqui, então a lógica restante permanece a mesma
      const clickedButton = buttonRefs.current[id];
      if (clickedButton) {
        const parentRect = clickedButton.closest(".btn-linha1").getBoundingClientRect();
        const buttonRect = clickedButton.getBoundingClientRect();

        const originX =
          ((buttonRect.left + buttonRect.width / 2 - parentRect.left) /
            parentRect.width) *
          100;
        const originY =
          ((buttonRect.top + buttonRect.height / 2 - parentRect.top) /
            parentRect.height) *
          100;
        setExpandedOrigin(`${originX}% ${originY}%`);
      }
    }
  }, [expandedButtonId]);

  return {
    expandedButtonId,
    expandedContent,
    expandedOrigin,
    buttonRefs,
    botoesData: BOTOES_DATA,
    handleButtonClick,
    setExpandedButtonId
  };
};