import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  // Converte as opções em uma string para criar uma dependência estável para o useEffect.
  // Isso garante que o efeito só execute novamente se as opções realmente mudarem.
  const optionsJSON = JSON.stringify(options);

  useEffect(() => {
    const currentElement = elementRef.current;

    // Garante que o elemento exista e que a biblioteca ScrollReveal esteja disponível.
    if (currentElement && typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal();
      
      // Revela o elemento com as opções fornecidas.
      // A biblioteca é inteligente o suficiente para atualizar um elemento se ele já foi revelado antes.
      sr.reveal(currentElement, JSON.parse(optionsJSON));
    }
  }, [optionsJSON]); // A chave da correção: o efeito é re-executado se as opções mudarem.

  return elementRef;
};