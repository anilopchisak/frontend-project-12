import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './app/providers/i18n/i18n.js'
import './app/styles/index.css'

import App from './app/App.jsx'
import store from './app/providers/store/store.js'

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n} defaultNS="translation">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
)
