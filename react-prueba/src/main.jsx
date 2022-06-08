import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CounterApp from './CounterApp'

ReactDOM.render(
  <React.StrictMode>
    {/* <App saludo={true}/> */}
    <CounterApp value = {123}/>
  </React.StrictMode>,
  document.getElementById('root')
)
