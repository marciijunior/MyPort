import React from 'react';

const contentData = {
  'btn1-1': {
    title: 'Desenvolvimento de Websites Personalizados',
    description: 'Criação de experiências digitais únicas e sob medida, desde a concepção até o lançamento, alinhadas à identidade e aos objetivos do seu negócio.',
    items: ['Design Responsivo', 'Foco em Performance', 'SEO Otimizado']
  },
  'btn1-2': {
    title: 'Aumento de Busca e Visibilidade (SEO)',
    description: 'Otimização completa para impulsionar a visibilidade da sua marca no ambiente digital, melhorando seu ranqueamento nos motores de busca.',
    items: ['Análise de Palavras-chave', 'Otimização On-Page', 'Link Building']
  },
  'btn1-3': {
    title: 'Design de Experiência e Interface (UX/UI)',
    description: 'Concepção de interfaces intuitivas, esteticamente agradáveis e de fácil utilização, proporcionando uma jornada fluida e envolvente para o usuário.',
    items: ['Pesquisa de Usuário', 'Prototipação', 'Testes de Usabilidade']
  },
  'btn2-1': {
    title: 'Integração de Sistemas e APIs',
    description: 'Conectamos sua solução digital a sistemas externos essenciais, como bancos de dados, CRMs e outras ferramentas, para um funcionamento coeso.',
    items: ['APIs RESTful', 'Webhooks', 'Bancos de Dados SQL']
  },
  'btn2-2': {
    title: 'Manutenção e Suporte de Websites',
    description: 'Garantimos que sua plataforma digital permaneça sempre atualizada, segura e com desempenho impecável, com monitoramento contínuo e rápida resolução de problemas.',
    items: ['Atualizações de Segurança', 'Backup', 'Monitoramento de Performance']
  },
  'btn2-3': {
    title: 'Animações e Experiências Interativas',
    description: 'Adicionamos elementos visuais animados, microinterações e experiências 3D imersivas que cativam o usuário e elevam a percepção da sua marca.',
    items: ['CSS Animations', 'ScrollReveal.js', 'React Three Fiber']
  }
};

export default function ExpandedContent({ buttonId }) {
  const content = contentData[buttonId] || { title: 'Carregando...', description: '', items: [] };

  return (
    <div className="container-expanded-content1">
      <div className="column-btn1">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <ul>
          {content.items?.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}