import Header from '../../components/Header';
import style from './minhapagina.module.css';

function MinhaPagina() {
    return (
        <>
            <Header />
            <section className={style.home}>
                <div className='container'>
                    
                  
                        <div className='conteudo'>
                        <h1>Sobre Mim</h1>
                
                <br />
                   
                <h2>Descrição</h2>
                        <p>Estudante de Sistemas para Internet na Universidade Católica de Pernambuco,<br />
                             participei ativamente do Rec'N'Play 2023 como palestrante e parte da equipe de produção <br /> 
                             do evento. Além disso, fui integrante da equipe vencedora do Kick Off 2023.1 na Residência <br />
                             OnBoard do Porto Digital. Ao longo da minha trajetória, pude adquirir experiências com <br />
                              metodologias ágeis, Figma, Trello, Canva, HTML, CSS, JAVA, entre outros. Possuo inglês avançado, <br />
                              boa comunicação, habilidade de interação em equipe e proatividade</p>
                 <br />
                         <h2>Formação acadêmica</h2>
                                <ul>Sistemas para Internet - UNICAP</ul>

                                <h2>Experiências relevantes</h2>
                                <ul> 
                                    <li>Residente de QA pelo CESAR</li>
                                    <li>Líder de projetos pelo Porto Digital</li>
                                    <li>Assistente de produção pelo Rec'N'Play 2023</li>
                                 </ul>
                               
                                 <h2>Interesses e hobbies</h2>
                                <ul> 
                                    <li>Apaixonada por teatro musical </li>
                                    <li>Amo ler cómedias românticas </li>
                                    <li>Amo ler cómedias românticas / Pretendo fazer um tour pela Europa </li>
                                 </ul>
                       
                        <div className='imagem'>
                           <img src="r1.jpg" style={{width:'350px'}} alt="Foto Hannah Sales" />
                        </div>
                        <br />
                        <h2>Quer saber mais? Se liga no meu linkedin:</h2>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/hannahsales?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7QOiQoauT%2FWWhx0f8QmuaA%3D%3D">LinkedIn Hannah Sales</a></li>
                            </ul>
                    <br />
                    
                     Você pode contribuir para alcançar os ODS através de ações individuais e coletivas, como consumo consciente, práticas sustentáveis e participação em projetos sociais. 
                    
                   
                        </div>
                 
                </div>
            </section>
            {/* <section className={style.minhapagina}>
                <div className = 'todapagina'>
                  
                        <h1>Sobre Mim</h1>
                   
                
                        <section>
                            <h2>Descrição</h2>
                            <p>Estudante de Sistemas para Internet na Universidade Católica de Pernambuco,<br />
                             participei ativamente do Rec'N'Play 2023 como palestrante e parte da equipe de produção <br /> 
                             do evento. Além disso, fui integrante da equipe vencedora do Kick Off 2023.1 na Residência <br />
                             OnBoard do Porto Digital. Ao longo da minha trajetória, pude adquirir experiências com metodologias <br />
                             ágeis, Figma, Trello, Canva, HTML, CSS, JAVA, entre outros. Possuo inglês avançado, boa comunicação, <br />
                             habilidade de interação em equipe e proatividade.</p>
                            <h2>Formação acadêmica ou profissional</h2>
                                <ul>Sistemas para Internet - UNICAP</ul>
                                <h2>Experiências relevantes</h2>
                                <ul> 
                                    <li>Residente de QA pelo CESAR</li>
                                    <li>Líder de projetos pelo Porto Digital</li>
                                    <li>Assistente de produção pelo Rec'N'Play 2023</li>
                                 </ul>

                                 <h2>Interesses e hobbies</h2>
                                <ul> 
                                    <li>Apaixonada por teatro musical </li>
                                    <li>Amo ler cómedias românticas </li>
                                    <li>Amo ler cómedias românticas / Pretendo fazer um tour pela Europa </li>
                                 </ul>
                                
                          
                        </section>
                        <section>
                          
                            <div className="carousel">
                                <img src="c2.jpg" alt="Foto 1" />
                                <img src="fotokakolin3.jpg" alt="Foto 2" />
                                <img src="r1.jpg" alt="Foto 3" />
                            </div>
                        </section>
                        <section>
                            <h2>Quer saber mais? Se liga no meu linkedin:</h2>
                            <ul>
                                <li><a href="linkedin.com/in/hannahsales">LinkedIn Hannah Sales</a></li>
                            </ul>
                        </section>
                
                </div>
            </section> */}
      
        </>
    );
}

export default MinhaPagina;
