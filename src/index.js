import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root'))
export const rerenderEntireTree = (state) => {  
  root.render(
    <React.StrictMode>
      <Router>
        <App  state={state} store={store} />
      </Router>
    </React.StrictMode>
  )
}

rerenderEntireTree(store.getState())

store.subscribe( () => {
  let state = store.getState()
  rerenderEntireTree(state)
})
