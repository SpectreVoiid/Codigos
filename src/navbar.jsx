import React from "react";
import './CSS/navbar.css'; // Importando o arquivo de estilos CSS

function Navbar({ cliqueSecao }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Valverde.jpg" alt="Logo" />
      </div>
      <ul className="menu">
        {/* Alterado onClick para chamar cliqueSecao com o nome da seção */}
        <li><button onClick={() => cliqueSecao('inicio')}> Início </button></li>
        <li><button onClick={() => cliqueSecao('sobre')}> Sobre </button></li>
        <li><button onClick={() => cliqueSecao('servicos')}> Serviços </button></li>
        <li><button onClick={() => cliqueSecao('contato')}> Contato </button></li>
      </ul>
    </div>
  );
}

export default Navbar;
