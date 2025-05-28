import React from 'react';
import '../App.css';

function Servicos() {
return (
  <div className="bloco-central">
    <div className="conteudo-principal">
      <div className="texto-container">
        <h1 className="texto-titulo">O que meu serviço oferece:</h1>
        <p className="paragrafo">
          Trabalhamos com consulta avulsa e acompanhamento trimestral (mais indicado). A consulta avulsa é ideal para quem busca orientação pontual, e ajustes específicos. Já o acompanhamento trimestral, é ideal para quem busca maior adesão, com resultados consistentes, e suporte contínuo. Meus atendimentos são feitos de forma on-line, e presencial.
        </p>

        <div className="servicos-container">
          {/* Coluna 1: Consulta Avulsa */}
          <div className="servico-item">
            <h2 className='texto-titulo'>Consulta Avulsa</h2>
            <ul>
              <li>Análise detalhada do histórico alimentar e rotina.</li>
              <li>Definição de metas (emagrecimento, hipertrofia, definição muscular).</li>
              <li>Avaliação de composição corporal.</li>
              <li>Plano personalizado.</li>
              <li>Acompanhamento por 30 dias</li>
              <li>Orientação sobre suplementação, caso necessário.</li>
              <li>Suporte via WhatsApp ou plataforma.</li>
            </ul>
          </div>

          {/* Coluna 2: Acompanhamento Trimestral */}
          <div className="servico-item">
            <h2 className='texto-titulo'>Acompanhamento Trimestral</h2>
            <ul>
              <li>Avaliação detalhada: histórico, rotina, objetivos, solicitação e avaliação de exames.</li>
              <li>Definição de metas, com estratégias personalizada.</li>
              <li>Acompanhamento por 90 dias (consecutivos).</li>
              <li>1 novo plano a cada mês.</li>
              <li>Suporte semanal pelo WhatsApp (dúvidas, orientações, ajustes).</li>
              <li>Mini e-book com opções de melhores marcas do supermercado.</li>
              <li>Feedbacks de evolução com base em fotos, peso, e medidas.</li>
              <li>Prescrição de manipulados e/ou suplementação (caso necessário).</li>
              <li>Brindes.</li>
            </ul>
          </div>
        </div>

        <a
          href="https://wa.me/message/ECMBGJDA4QTDC1"
          target="_blank"
          rel="noopener noreferrer"
          className="agendar-whatsapp"
        >
          Quero Agendar
        </a>
      </div>
    </div>
  </div>
);
}

export default Servicos;