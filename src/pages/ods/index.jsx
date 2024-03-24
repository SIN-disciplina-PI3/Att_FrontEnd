import React from 'react';
import Header from '../../components/Header';
import style from './ods.module.css';

function ODS() {
    return (
        <>
            <Header />
            <section className={style.home}>
                <div className='container'>
                    
                  
                        <div className='conteudo'>
                        <h1>ODS 7: Energia Acessível e Limpa</h1>
                
                <br />
                   
                        <h2>Sobre o ODS 7</h2>
                        <p>O Objetivo de Desenvolvimento Sustentável número 7 visa <br />
                            garantir o acesso confiável, sustentável, moderno e a preço <br />
                            acessível à energia para todos. Isso inclui o aumento do acesso às <br />  
                             energias renováveis e a melhoria da eficiência energética</p>
                 <br />
                        <h2>Por que é importante?</h2>
                        <p>A energia é essencial para quase todas as formas de desenvolvimento <br />
                             econômico, social e ambiental. Garantir acesso à energia limpa e sustentável <br />
                             é crucial para combater a pobreza, melhorar a saúde, promover a igualdade de gênero, <br />
                             impulsionar o crescimento econômico e mitigar as mudanças climáticas.</p>

                        <h2>Metas do ODS 7</h2>
                        <ul>
                            <li>Até 2030, garantir o acesso universal a serviços de energia acessíveis, confiáveis e modernos.</li>
                            <li>Até 2030, aumentar substancialmente a participação de energias renováveis na matriz <br />
                             energética global.</li>
                            <li>Até 2030, dobrar a taxa global de melhoria da eficiência energética.</li>
                            
                       </ul>
                        <div className='imagem'>
                           <img src="ods7.png" style={{width:'350px'}} alt="ODS 7" />
                        </div>
                    
                    <br />
                    
                     Você pode contribuir para alcançar os ODS através de ações individuais e coletivas, como consumo consciente, práticas sustentáveis e participação em projetos sociais. 
                    
                   
                        </div>
                 
                </div>
            </section>
           
        </>
            /* <section className={style.ods}>
           
            <div className='container'>
                    
                  
                        <div className='conteudo'>
            
                <div>
            
                        <h1>ODS 7: Energia Acessível e Limpa</h1>
            
                  
                        <section>
                       
                            <h2>Sobre o ODS 7</h2>
                            <p>O Objetivo de Desenvolvimento Sustentável número 7 visa <br />
                            garantir o acesso confiável, sustentável, moderno e a preço <br />
                            acessível à energia para todos. Isso inclui o aumento do acesso às <br />  
                             energias renováveis e a melhoria da eficiência energética.</p>
                        </section>
                        <section>
                            <h2>Por que é importante?</h2>
                            <p>A energia é essencial para quase todas as formas de desenvolvimento <br />
                             econômico, social e ambiental. Garantir acesso à energia limpa e sustentável <br />
                             é crucial para combater a pobreza, melhorar a saúde, promover a igualdade de gênero, <br />
                             impulsionar o crescimento econômico e mitigar as mudanças climáticas.</p>
                        </section>
                        <section>
                            <h2>Metas do ODS 7</h2>
                            <ul>
                                <li>Até 2030, garantir o acesso universal a serviços de energia acessíveis, confiáveis e modernos.</li>
                                <li>Até 2030, aumentar substancialmente a participação de energias renováveis na matriz energética global.</li>
                                <li>Até 2030, dobrar a taxa global de melhoria da eficiência energética.</li>
                            </ul>
                        
                        </section>
                
                </div>
                </div>
                </div>
            
            </section> */
         
       
    );
}

export default ODS;
