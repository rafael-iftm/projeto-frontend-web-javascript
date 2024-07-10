// src/components/Content.jsx
import React from 'react';

function Content() {
  return (
    <main className="App-content">
      <section className="info-section">
        <h2>Acesso à Informação</h2>
        <p>Veja dados de transparência e governança</p>
        <div className="info-boxes">
          <div className="info-box">PLANO DE DESENVOLVIMENTO INSTITUCIONAL</div>
          <div className="info-box">PESQUISA PÚBLICA PROCESSOS IFTM</div>
          <div className="info-box">LICITAÇÕES E CONTRATOS</div>
          <div className="info-box">RECEITAS E DESPESAS</div>
          <div className="info-box">DADOS ABERTOS</div>
          <div className="info-box">TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS</div>
          <div className="info-box">SERVIDORES</div>
          <div className="info-box">PERGUNTAS FREQUENTES</div>
        </div>
      </section>
      <section className="content-section">
        <h3>Centrais de Conteúdo</h3>
        <div className="content-boxes">
          <div className="content-box">IMAGENS</div>
          <div className="content-box">PUBLICAÇÕES</div>
          <div className="content-box">VÍDEOS</div>
        </div>
      </section>
    </main>
  );
}

export default Content;
