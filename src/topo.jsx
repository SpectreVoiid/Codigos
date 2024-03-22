import React, { useState } from "react";
import Navbar from './navbar'; // Importando o componente de barra de navegação
import Slideshow from './Slide.jsx'; // Corrigido o nome do componente
import './CSS/App.css';
import SobreMim from "./sobre.jsx";
import Servicos from "./servicos.jsx";
import Contato from "./contatos.jsx";

export default function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('inicio');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    }

    return (
        <header>
            <Navbar cliqueSecao={cliqueSecao} /> {/* Passando a função cliqueSecao como propriedade para o Navbar */}

            <div className='sessao'>
                {/* Renderizando o Slideshow se a seção atual for "inicio" */}
                {secaoAtual === 'inicio' && (
                    <div className="secao">
                        <h1> Seja bem-vindo a Valverde Eletros,Confira os nossos produtos: </h1>
                        <Slideshow /> {/* Renderiza o Slideshow */}
                    </div>

                    
                )}
                {secaoAtual === 'sobre' && (
                    <div className="secao">
                      <SobreMim />
                    </div>

                    
                )}

                {secaoAtual === 'servicos' && (
                    <div className="secao">
                        <h1> Página inicial </h1>
                        <Servicos/> {/* Renderiza o Slideshow */}
                    </div>
                )}

                {secaoAtual === 'contato' && (
                    <div className="secao">
                        <h1> Fale comigo:</h1>
                        <Contato /> {/* Renderiza o Slideshow */}
                    </div>
                )}


            </div>
        </header>
    );
}
