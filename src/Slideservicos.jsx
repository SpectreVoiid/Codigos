import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './CSS/App.css';

export default function SlideService() {
    const imagens = ['Manutençao.jpg', 'Intel.jpg', 'Segurança.jpg', 'Inteligentes.jpg'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(passarSlide, 5000); // Passar para a próxima imagem a cada 5 segundos

        return () => clearInterval(interval); // Limpar o intervalo quando o componente desmontar
    }, [indiceAtual]); // Executar o efeito sempre que o índice atual mudar

    const passarSlide = () => {
        setIndiceAtual(prevIndice => (prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
        setIndiceAtual(prevIndice => (prevIndice - 1 + imagens.length) % imagens.length);
    };

    const avancarSlide = () => {
        setIndiceAtual(prevIndice => (prevIndice + 1) % imagens.length);
    };

    return (
        <div className='fotoService'>
            <img src={imagens[indiceAtual]} alt={`imagem${indiceAtual + 1}`} />
            <br />
            <button onClick={voltarSlide} className='botao'>
                <FontAwesomeIcon icon={faArrowLeft} /> Retornar
            </button>
            <button onClick={avancarSlide} className='botao'>
                Ver mais <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
}