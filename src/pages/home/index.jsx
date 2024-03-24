import React from 'react';
import Header from '../../components/Header';
import style from './home.module.css';

function Home() {
    return (
        <>
            <Header />
            <section className={style.home}>
                <div className='container'>
                    
                  
                        <div className='conteudo'>
                        <h1>Objetivos de Desenvolvimento <br />Sustentável (ODS)</h1>
                
                <br />
                   
                        <h2>O que são os ODS?</h2>
                        <p>Os Objetivos de Desenvolvimento Sustentável (ODS) <br />
                         são uma iniciativa da ONU para promover ações em diversas <br />
                         áreas visando o desenvolvimento sustentável global.</p>
                 <br />
                   
                        <h2>Principais Objetivos</h2>
                        <ul>
                            <li>Erradicação da pobreza</li>
                            <li>Fome zero e agricultura sustentável</li>
                            <li>Saúde e bem-estar</li>
                            <li>Educação de qualidade</li>
                            <li>Igualdade de gênero</li>
                            <li>Água Potável e Saneamento</li>
                            <li>Energia Acessível e Limpa</li>
                            <li>Trabalho Decente e Crescimento Econômico</li>
                            <li>Indústria, Inovação e Infraestrutura</li>
                            <li>Redução das Desigualdades</li>
                            <li>Cidades e Comunidades Sustentáveis</li>
                            <li>Consumo e Produção Responsáveis</li>
                            <li>Ação Contra a Mudança Global do Clima</li>
                            <li>Vida na Água</li>
                            <li>Vida Terrestre</li>
                            <li>Paz, Justiça e Instituições Eficazes</li>
                            <li>Parcerias e Meios de Implementação</li>
                        </ul>

                        <div className='imagem'>
                           <img src="todasods3.png" style={{width:'350px'}} alt="Todas as ODS" />
                        </div>
                    
                    <br />
                       
                        <p>Você pode contribuir para alcançar os ODS através de ações individuais e coletivas, como consumo consciente, práticas sustentáveis e participação em projetos sociais.</p>
                   
                        </div>
                 
                </div>
            </section>
           
        </>
    );
}

export default Home;
