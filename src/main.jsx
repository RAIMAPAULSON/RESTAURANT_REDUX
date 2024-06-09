import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import restaurantStore from './redux/restaurantStore.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={restaurantStore}>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
