// src/hooks/useScrollReveal.js
import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      ScrollReveal().reveal(elementRef.current, options);
    }
    // Alterado: Garante que o efeito só execute se o conteúdo das opções mudar,
    // evitando re-execuções desnecessárias a cada renderização.
  }, [JSON.stringify(options)]);

  return elementRef;
};