import React from 'react';
import imagem from "../images/quemsoueu.jpg";
import '../App.css';

function QuemSouEu() {
return (
  <div className="bloco-central">
    <div className="conteudo-principal">
      {/* Text Content */}
      <div className="texto-container">
        <h1 className='texto-titulo'>Quem sou eu?</h1>
        <p className="paragrafo">
          Me chamo Lara Beatriz, sou nutricionista Esportiva e Estética, e atendo há 5 anos, no modelo on-line, e presencial.
        </p>
        <p className="paragrafo">
          Nesses anos de experiência, já ajudei diversas mulheres a atingirem os seus objetos, e o tão desejado corpo dos sonhos, com dieta equilibrada, e eficaz.
        </p>
        <p className="paragrafo">
          Estou sempre disposta a ouvir os meus pacientes, entendendo as suas dores, histórias, e dificuldades.
        </p>
        <p className="paragrafo">
          Primeiro busco fazer com que mudem a sua mentalidade, para depois, mudar os seus hábitos.
        </p>
        <p className="paragrafo">
          O meu dever é acolher, e não julgar. E a minha maior missão, é transformar vidas, através do meu trabalho.
        </p>
      </div>

      {/* Image */}
      <div className="imagem-container">
        <img
          src={imagem}
          alt="Lara Beatriz"
          className='img-quem-sou-eu'
        />
      </div>
    </div>
  </div>
);
}

export default QuemSouEu;