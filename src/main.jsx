import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Calculator from './main/calculator'
import ReactIcon from './assets/react.svg'
import viteIcon from '../public/vite.svg'


ReactDOM.createRoot(document.getElementById('root')).render(
<>
<h1>Calculator</h1>
 <span> created with <img src={ReactIcon} /> + <img src={viteIcon} /> = ❤ !</span>
 <Calculator/>
</>
)
