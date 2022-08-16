import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
export const rerenderEntireTree = () => {  
  root.render(
    <React.StrictMode>
      <Router>
        <App  state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Router>
    </React.StrictMode>
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
