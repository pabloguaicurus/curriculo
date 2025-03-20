import React from 'react'
import '../index.css'

const Formacao = () => {
  return (
    <div className="formacao">
        <div className="descricao">
            <h1>Formação Acadêmica</h1>
                <p>Formado em <strong>Sistemas de Informação</strong> pela Universidade Federal do Rio Grande. A premissa do curso é formar um profissional com capacidade analítica, com domínio das principais tecnologias e habilidade para criar um elo entre o conhecimento e a solução de problemas.</p><br/>
                <p>A escolha pelo curso se deu após o ano de 2020, com a pandemia de COVID-19 eu enxerguei que existia um mercado repleto de oportunidades e acabei gostando da área, decidindo então mudar de carreira, pois também sou formado em <strong>Jornalismo</strong> pela universidade Veiga de Almeida. </p><br />
                <p></p>
        </div>
          
        <div className="xpcard">
            <h2>Sistemas de Informação - Universidade Federal do Rio Grande</h2>
            <p><strong>Graduação</strong>: Junho/2021 - Março/2024</p>
            <p>Formado com coeficiente de rendimento 7,7</p>
        </div>
        
        <div className="xpcard">
            <h2>Jornalismo - Universidade Veiga de Almeida</h2>
            <p><strong>Graduação</strong>: Abril/2015 - Dezembro/2018</p>
            <p>Formado com coeficiente de rendimento 8,3</p>
        </div>
        
         <div className="xpcard">
            <h2>Técnico em Telecomunicações - Escola Técnica Estadual Ferreira Viana</h2>
            <p><strong>Médio/Técnico</strong>: Março/2009 - Dezembro/2011</p>
            <p>Formado com coeficiente de rendimento 6,5</p>
        </div>
 
 
 
 
 
    </div>
  )
}

export default Formacao