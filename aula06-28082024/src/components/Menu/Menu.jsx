import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Pagina Inicial</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/sobre-nos">Sobre Nos</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
