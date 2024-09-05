import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import {Quotes} from './Quotes.jsx'
import {TodaysDate} from './Date.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    <Greeting/>
    <Quotes/>
    <h1>Today's Date:</h1>
    <TodaysDate/>
    
    
  </StrictMode>,
)
