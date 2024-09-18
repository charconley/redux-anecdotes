import ReactDOM from 'react-dom/client'
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)