import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MeuComponente from './components/teste.jsx'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>     
  </StrictMode>,
)
