import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import LoginPage from './components/Login/login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <LoginPage />
    </div>
  </StrictMode>,
)
