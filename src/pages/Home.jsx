import React from 'react'
import '../index.css'

const Home = () => {
  return (
      <div className="container">
          <div className="topside">
                <div className="foto">
                <img 
                src='./src/assets/pablo.jpg'              
                />
              </div>
                <div className="texto">
                <h1>Olá, eu sou o Pablo Guaicurus</h1>
                <p>Sou formado em jornalismo, mas migrei para área de TI e recentemente me formei no curso Sistemas de Informação na Universidade Federal do Rio Grande. Em função da nova carreira, decidi me mudar do Rio de Janeiro para o Rio Grande do Sul, sendo esse o meu maior desafio até hoje. </p>
                <p>Atualmente, estou em busca de uma oportunidade de trabalho na área de desenvolvimento de software, onde possa aplicar meus conhecimentos e habilidades, e também aprender e me desenvolver profissionalmente.</p>
                <p>Estou sempre disposto a aprender e a me adaptar a novas situações, e acredito que a melhor forma de aprender é atuando de forma prática em projetos. Por isso, estou sempre disposto a encarar novos desafios.</p>
                <h3>Minhas habilidades técnicas incluem:</h3>
                <p>
                HTML5: Semântica, formulários e elementos multimídia.<br />

                CSS3: Layouts responsivos, flexbox, grid e animações simples.<br />

                JavaScript​: Promessas, assync/await, funções.<br />

                React: Componentização, estados, propriedades, ciclo de vida, react router dom.<br />

                Controle de versionamento: Comandos básicos de git e fluxos de trabalho.<br />

                Flutter: Orientação a objetos, arquitetura limpa, widgets.<br />

                Banco de dados: Bancos de dados relacionais, comandos SQL.<br />

                Pyhton: Flask, Selenium, Plotly, Anaconda, Pandas, Streamlit.<br />

                Soft Skills: Facilidade de comunicar problemas e soluções de forma clara e objetiva e boa capacidade de trabalhar em equipe.<br />
                </p>
                </div>
          </div>

    </div>
  )
}

export default Home