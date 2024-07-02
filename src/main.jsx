import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import States from './Pages/States.jsx'
import Videos from './Pages/Videos.jsx'
import Photos from './Pages/Photos.jsx'
import Rootp from './Rootp.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <Rootp />
</React.StrictMode>,
)
