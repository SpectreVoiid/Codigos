import React from "react";
import "./CSS/contato.css";

export default function Contato() {
  return (
    <nav>
      <ul className="contact-images">
        <li>
          <a href="https://api.whatsapp.com/send?phone=71986924559">
            <img src="./public/whatsappG.png" alt="Botão de telefone" />
            <p>WhatsApp</p>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/omenino_do_computador/">
            <img src="./public/instagramG.png" alt="Botão de e-mail" />
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="https://telegram.me/">
            <img src="./public/telegrama.png" alt="Botão de mensagem" />
            <p>Telegram</p>
          </a>
        </li>
        <li>
          <a href="mailto:.com">
            <img src="./public/gmailG.png" alt="Botão de e-mail" />
            <p>E-mail</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <img src="./public/linkedinG.png" alt="Botão do LinkedIn" />
            <p>LinkedIn</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
