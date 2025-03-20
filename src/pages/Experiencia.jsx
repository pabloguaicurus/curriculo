import React from 'react'
import '../index.css'

const Experiencia = () => {
  return (
    <div className="experiencia">
      <div className="descricao">
      <h1>Curriculo</h1>
      <p>Aqui darei destaque às experiências que condizem com a carreira que viso seguir. Das oportunidades que eu tive e não constam aqui eu posso dizer que aprendi sobre o funcionamento de uma empresa, da cobrança por resultados e a importância do comprometimento com normas e horários.</p>
      <p>Durante toda a minha tragetória profissional sempre prezei por um trabalho com ética e profissionalismo, buscando sempre evoluir no que faço e progressão na carreira. Atualmente estou em busca de uma oportunidade para ingressar no mercado de trabalho como desenvolvedor frontend, onde eu possa aplicar meus conhecimentos e aprender cada vez mais.</p>
      </div>
      
      <div className="xpcard">
        <h2>iTec/FURG-Embrapii - Centro de Robótica e Ciência de Dados</h2>
        <p><strong>Bolsista/Estágio</strong>: Novembro/2024 - Atualmente</p>
        <p>No iTec eu atuo no time de frontend que desenvolve o aplicativo <strong>PINGUIM</strong> utilizando <strong>Flutter</strong>. Como uma pessoa de pouca experiência inicialmente eu desenvolvi telas de forma estática, porém com o passar do tempo fui evoluindo e recebendo mais responsabilidades, como integrações com a API desenvolvida pelo backend.</p>
        <p>Entre as minhas atividades estão:</p>
        <ul className='lista'>
          <li>Desenvolvimento de telas seguindo o modelo disposto no Figma</li>
          <li>Manutenção de telas</li>
          <li>Desenvolvimento de testes</li>
          <li>Desenvolvimento de documentação</li>
          <li>Integração com a API</li>          
        </ul>
        <p>E eu pude desenvolver as habilidades:</p>
        <ul className='lista'>
          <li>Trabalho em equipe</li>
          <li>Comunicação, organização e proatividade</li>
          <li>Flutter, Dart e programação orientada à objetos</li>
          <li>JIRA e a sua utlização junto ao SCRUM</li>
          <li>Git e versionamento por meio do Github</li>
        </ul>
      </div>

      <div className="xpcard">
      <h2>Universidade Federal do Rio Grande -  FURG</h2>
      <p><strong>Estágio</strong>: Outubro/2021 - Outuburo/2023</p>
      <p>Como estagiário da <strong>FURG</strong> eu atuei no Centro de Gestão da Tecnologia da Informação, ou CGTI. Inicialmente entrei para realizar manutenção de computadores, porém após alguns meses de trabalho eu comecei a apoiar o setor de redes ocasionalmente e foi lá que terminei o contrato de estágio.</p>
      <p>Entre as minhas atividades estavam:</p>
      <ul className='lista'>
        <li>Manutenção dos computadores da instituição</li>
        <li>Atendimento e suporte aos usuários dos diversos sistemas da universidade</li>
        <li>Recebimento e homologação dos equipamentos recebidos pela universidade</li>          
        <li>Entrega dos computadores nos respectivos setores</li>
        <li>Manutenção de redes</li>
        <li>COnfiguração de switches e hubs</li>
        <li>Mapeamento de novos pontos de rede</li>
        <li>Acompanhamento do tráfego via sistema Zabbix</li>            
      </ul>
      <p>E eu pude desenvolver as habilidades:</p>
      <ul className='lista'>
        <li>Resolução de problemas de forma rápida e eficiente</li>
          <li>Topologia de redes</li>
          <li>Sistemas operacionais: Windows, Lunix, macOS</li>
          <li>Configuração de redes</li>
          <li>Atendimento e suporte</li>
      </ul>
    </div>
      

    <div className="xpcard">
    <h2>OLX </h2>
    <p><strong>Assistente de qualidade</strong>: Abril/2015 - Janeiro/2017</p>
    <p>Na <strong>OLX</strong> eu pude conhecer o dia a dia de uma empresa de tecnologia e como a inovação pode mudar a vida das pessoas. Foi lá que conheci o desenvolvimento e me interessei pela computação.</p>
    <p>Entre as minhas atividades estavam:</p>
    <ul className='lista'>
      <li>Verificação dos anuncios que eram publicados</li>
    </ul>
    </div>
      
    <div className="xpcard">
    <h2>Net Manager Informática</h2>
    <p><strong>Auxiliar técnico</strong>: Outubro/2012 - Agosto/2014</p>
    <p>Na <strong>Net Manager</strong> eu trabalhei implementando o sistema de gestão de telefonia e dando suporte aos usuários da plataforma.</p>
    <p>Entre as minhas atividades estavam:</p>
    <ul className='lista'>
      <li>Implementação do sistema de gestão de telefonia</li>
      <li>Atendimento e suporte aos usuários</li>
      <li>Manutenção do sistema</li>
      <li>Demonstração do uso do sistema para novos usuários</li>    
    </ul>
    <p>E eu pude desenvolver as habilidades:</p>
    <ul className='lista'>
        <li>Introdução em lógica de programação</li>
        <li>Atendimento e suporte</li>
        <li>Prática no banco de dados mysql</li>  
    </ul>
    </div>    
      
    </div>
  )
}

export default Experiencia