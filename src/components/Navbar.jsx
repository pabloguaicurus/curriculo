import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
    <div id="navbar">
        <h2>
            <Link to="/curriculo">Inicio</Link>
        </h2>
        <h2>
            <Link to="experiencia">Experiência</Link>
        </h2>
        <h2>
            <Link to="formacao">Formação</Link>
        </h2>    
        <h2>
            <Link to="sobre">GitHub e Contato</Link>
        </h2>
    </div>
  )
}

export default Navbar