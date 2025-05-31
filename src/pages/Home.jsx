import React from 'react';
import imagemlogo from "../images/logo.jpg";
import imagemtexto from "../images/imgcomtexto.jpg";
import '../App.css';

function Home() {
return (
<div className="bloco-central">
   <div className="conteudo-principal">
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <img
      src= {imagemtexto}
      alt="Imagem com texto"
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
    />
    <div
      style={{
        position: 'absolute',
        
        maxWidth: '40%',
        margin: '4px',
        top: '30%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        color: '#383A37',
        fontSize: '24px',
        fontFamily: 'DM Serif Display',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '2px 2px 4px #ffffff', // Opcional: Sombra para melhor legibilidade
      }}
    >
      Conquiste o emagrecimento que sonha, com a ajuda de uma nutricionista!
    </div>
  </div>
   </div>
   <div className="conteudo-principal"></div>
   <div className="conteudo-principal">
    <div className="imagem-container">
        <img
          src={imagemlogo}
          alt="Logotipo"
          className='img-logo'
        />
    </div>
    <div className="texto-container">
        <p className="paragrafo">Lembra daquela promessa de emagrecer, que você fez para si mesma? De ter mais energia, disposição,
e dar um UP na sua autoestima, e ter mais qualidade de vida?</p>
        <p className="paragrafo">Isso é exatamente o que o meu acompanhamento proporciona!</p>
        <p className="paragrafo">Com ele, já ajudei diversas mulheres como você, que tentaram várias vezes emagrecer por conta
própria, sem sucesso, a finalmente alcançarem o corpo que tanto desejavam, de forma leve e
prazerosa.</p>
        <p className="paragrafo">Quer saber como? Toque no botão abaixo, e entre em contato comigo, pelo WhatsApp!</p>
    </div>
    
   </div>
   <div className="conteudo-principal">
    <div className='texto-container'>
    <h1 className='texto-titulo1'>Conheça as etapas do meu acompanhamento</h1>
    <div className='div-fases'>
    <div className='texto-container-fases'>
      <h3 className='texto-numero-fase'>FASE 01</h3>
      <h2 className='texto-titulo-fases'>Autoconhecimento e adaptação</h2>
      <p className='paragrafo'>Nesta fase, identificamos as dificuldades e dúvidas da paciente, analisamos a sua rotina, hábitos
alimentares.</p>
      <p className='paragrafo'>Desenvolvemos juntas, um plano alimentar prático, e adaptativo, para que ela possa pegar o ritmo, e
ganhar a confiança na capacidade de seguir uma dieta.</p>
    </div>
    <div className='texto-container-fases'>
      <h3 className='texto-numero-fase'>FASE 02</h3>
      <h2 className='texto-titulo-fases'>Ajustes Clínicos, Fisiológicos e Metabólicos</h2>
      <p className='paragrafo'>Nesta fase, focamos em melhorar aspectos clínicos, como: sono, inflamação corporal, indisposição,
dores, intestino preguiçoso, metabolismo lento, entre outros quadros clínicos que a paciente possa ter.</p>
      <p className='paragrafo'>Iremos trabalhar para solucionar desconfortos clínicos, fisiológicos e metabólicos, promovendo o bem-
estar e a saúde integral.</p>
    </div>
    <div className='texto-container-fases'>
      <h3 className='texto-numero-fase'>FASE 03</h3>
      <h2 className='texto-titulo-fases'>Manutenção de resultados</h2>
      <p className='paragrafo'>Aqui a paciente já estará chegando no corpo que deseja, e já conseguiremos identificar os gatilhos
positivos e negativos que influenciam a sua jornada.</p>
      <p className='paragrafo'>Nesta fase, ela atingirá um equilíbrio alimentar, sentindo-se segura para manter uma dieta saudável e
flexível, sem culpa e sem frustrações.</p>
      
    </div>
    </div>  
    
    </div>
   </div>
   <div className="conteudo-principal"></div>
</div>
);
}
export default Home;