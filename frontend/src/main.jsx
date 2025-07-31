import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import './app/styles/index.css'

import App from './app/App.jsx'
import store from './app/providers/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
