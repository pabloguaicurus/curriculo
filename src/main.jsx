import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Experiencia from './pages/Experiencia.jsx'
import Sobre from './pages/Sobre.jsx'
import Formacao from './pages/Formacao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/curriculo' element={<App />}>
          <Route index element={<Home />} />
          <Route path='experiencia' element={<Experiencia />} />
          <Route path='formacao' element={ <Formacao />} />
          <Route path='sobre' element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)