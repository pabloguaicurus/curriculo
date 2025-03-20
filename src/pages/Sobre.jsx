import React from 'react'

const Sobre = () => {
  return (
    <div className="contato">
      <div className="github">
        <h1>GitHub</h1>
        <p>Para acessar o meu repositório no GitHub clique no link abaixo, lá você irá encontrar os repostiórios dos meus projetos, incsluve deste:{' '}  
        
          <a
            href='https://github.com/pabloguaicurus'
            target='_blank'
            rel='noreferrer noopener'
          >
          <strong>GitHub Pablo Guaicurus</strong></a>
        </p>
      </div>
      <div className="descricao">
        <h1>Contato</h1>
        <p>Se você gostou do meu trabalho e quer me contratar, ou apenas bater um papo sobre oportunidades e projetos, entre em contato comigo pelos canais abaixo:</p><br/>
        <p><strong>Telefone</strong>: (21) 98300-1346</p><br/>
        
        <p>
          <strong>Email</strong>:{' '}
          <a
            href='mailto:pablo.guaicurus@gmail.com'
            target='_blank'
            rel='noreferrer noopener'>
            pablo.guaicurus@gmail.com
            </a>
        </p><br/>
        
        <p>
          <strong>LinkedIn</strong>:{' '}
          <a
            href='https://www.linkedin.com/in/pablo-guaicurus-703308129/'
            target='_blank'
            rel='noreferrer noopener'
          >
          Pablo Guaicurus    
          </a>
        </p>

      </div>  

    </div>
  )
}

export default Sobre