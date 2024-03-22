import React from "react";
import './CSS/rodape.css'; // Importando o arquivo de estilos CSS

function Rodape() {
  return (
    <footer className="rodape">
      <div className="redes-sociais">
        <ul>
          <li><a href="https://www.instagram.com">Instagram</a> <img src="./public/instagram.png" alt="" className="icone" /></li>
          <li><a href="https://api.whatsapp.com/send?phone=75991271507">WhatsApp</a><img src="./public/whatsapp.png" alt="" className="icone"/></li>
          <li><a href="mailto:seuemail@gmail.com">Gmail</a> <img src="./public/email.png" alt="" className="icone"/></li>
        </ul>
      </div>
      <div className="linha"></div>
      <div className="falar">
        <h1>Fale conosco.</h1>
        <h5>Ficamos à disposição para atendê-lo, buscando estabelecer uma parceria de sucesso com investimentos em tecnologia e qualidade.</h5>
        <p><h6> Somos o melhor invesimento que você pode fazer para a sua necessidade ou lazer. </h6></p>
      </div>
    </footer>
  );
}

export default Rodape;
