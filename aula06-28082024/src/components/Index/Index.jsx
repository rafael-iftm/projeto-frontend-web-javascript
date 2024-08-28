import React from 'react';
import styles from './Index.module.css';
import { Link } from 'react-router-dom';

function Index() {
    return (
        <section className={styles.sectionContainer}>
            <h2>Pagina Inicial</h2>
            <p><a href="#basePagina">Descer para o final da página</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione autem, laborum corporis accusamus cupiditate reprehenderit eius sequi aliquid ut corrupti ullam necessitatibus asperiores modi fugiat voluptatibus veniam possimus nobis!</p>
            <p><Link to="/contato">Ir para a página de contato</Link></p>
            <p><a href="#" id='basePagina'>Voltar ao topo</a></p>
            <p><a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">Abrir pagina do Google Search</a></p>
        </section>
    );
}

export default Index;
