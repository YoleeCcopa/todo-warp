import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './assets/_icons.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
