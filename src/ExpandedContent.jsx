import React from 'react';
import "./styles/Header.css";
import "./styles/PosHeader.css";
import "./styles/Main.css";
import './styles/ExpandedContent.css';

const ExpandedContent = ({ buttonId }) => {
  const contentMap = {
    'btn1-1': (
    <div className='container-expanded-content1'>
        <div className='column-btn1'>
            <img src="/img1-btn1.png" alt="SEO e Visibilidade" />
            <h3>Planejamento Personalizado</h3>
            <p>Criação de sites sob medida, com identidade visual única e foco nos objetivos do cliente.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img2-btn1.png" alt="SEO e Visibilidade" />
            <h3>Tecnologias Modernas</h3>
            <p>Uso de React.js, JavaScript (ES6+), HTML5 e CSS3 para entregar interfaces modernas e eficientes.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img3-btn1.png" alt="SEO e Visibilidade" />
            <h3>Versionamento Seguro</h3>
            <p>Git garante histórico, controle e colaboração no projeto, com rastreamento de mudanças.</p>
        </div>
    </div>
    ),
    'btn1-2': (
    <div className='container-expanded-content1'>
        <div className='column-btn1'>
            <img src="/img1-btn2.png" alt="SEO e Visibilidade" />
            <h3>Crescimento Orgânico</h3>
            <p>Estratégias que elevam o ranqueamento no Google e atraem tráfego qualificado.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img2-btn2.png" alt="SEO e Visibilidade" />
            <h3>Estrutura Otimizada</h3>
            <p>Utilização de HTML5 semântico e CSS3 responsivo, seguindo boas práticas de SEO.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img3-btn2.png" alt="SEO e Visibilidade" />
            <h3>Performance Aprimorada</h3>
            <p>Webpack e Vite otimizam o tempo de carregamento e a experiência do usuário.</p>
        </div>
    </div>
    ),
    'btn1-3': (
    <div className='container-expanded-content1'>
        <div className='column-btn1'>
            <img src="/img1-btn3.png" alt="SEO e Visibilidade" />
            <h3>Design Centrado no Usuário</h3>
            <p>Interfaces pensadas para serem intuitivas, acessíveis e agradáveis.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img2-btn3.png" alt="SEO e Visibilidade" />
            <h3>Interface Responsiva</h3>
            <p>Layouts adaptáveis a qualquer dispositivo com HTML5, CSS3 e React.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img3-btn3.png" alt="SEO e Visibilidade" />
            <h3>Testes de Usabilidade</h3>
            <p>Testes reais validam a experiência e otimizam a navegação com base no comportamento do usuário.</p>
        </div>
    </div>  
    ),
    'btn2-1': (
    <div className='container-expanded-content1'>
        <div className='column-btn1'>
            <img src="/img1-btn4.png" alt="SEO e Visibilidade" />
            <h3>Conectividade Total</h3>
            <p>Conexão entre seu site e plataformas como CRMs, bancos de dados e serviços externos.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img2-btn4.png" alt="SEO e Visibilidade" />
            <h3>Consumo de APIs</h3>
            <p>Uso de Fetch API e Axios para comunicação eficiente entre frontend e backend.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img3-btn4.png" alt="SEO e Visibilidade" />
            <h3>Integração com Sistemas</h3>
            <p>Sistemas integrados garantem automação, escalabilidade e produtividade.</p>
        </div>
    </div>
    ),
    'btn2-2': (
    <div className='container-expanded-content1'>
        <div className='column-btn1'>
            <img src="/img1-btn5.png" alt="SEO e Visibilidade" />
            <h3>Monitoramento Constante</h3>
            <p>Sites seguros e estáveis com monitoramento ativo e feedback contínuo.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img2-btn5.png" alt="SEO e Visibilidade" />
            <h3>Atualizações Técnicas</h3>
            <p>Ferramentas modernas mantêm o projeto sempre atualizado e funcional.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img3-btn5.png" alt="SEO e Visibilidade" />
            <h3>Atendimento Rápido</h3>
            <p>Suporte técnico para identificar falhas e resolver problemas rapidamente.</p>
        </div>
    </div>
    ),
    'btn2-3': (
    <div className='container-expanded-content1'>
        <div className='column-btn1'>
            <img src="/img1-btn6.png" alt="SEO e Visibilidade" />
            <h3>Microinterações Visuais</h3>
            <p>Animações e efeitos que tornam a navegação fluida e envolvente.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img2-btn6.png" alt="SEO e Visibilidade" />
            <h3>Animações com React</h3>
            <p>React Hooks e CSS Animations trazem vida à interface de forma leve.</p>
        </div>
        <div className='column-btn1'>
            <img src="/img3-btn6.png" alt="SEO e Visibilidade" />
            <h3>Experiências 3D</h3>
            <p>Elementos 3D com Three.js/React Three Fiber criam impacto visual imersivo.</p>
        </div>
    </div>
    ),
  };

  return contentMap[buttonId] || null;
};

export default ExpandedContent;