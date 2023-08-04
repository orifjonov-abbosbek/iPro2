import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/Root/Root'
import './base.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
