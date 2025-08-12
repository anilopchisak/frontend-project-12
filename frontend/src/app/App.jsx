import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Header from '../widgets/header/Header.jsx'
import AppRouter from './providers/router/AppRouter.jsx'
import ToastifyContainer from '../shared/ui/toastifyContainer/ToastifyContainer.jsx'
import ModalWindow from '../shared/ui/modal/ModalWindow.jsx'
import { Provider, ErrorBoundary } from '@rollbar/react'

const rollbarConfig = {
  accessToken: import.meta.env.ACCESS_TOKEN_ROLLBAR,
  environment: 'testenv',
}

const App = () => {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <>
          <Header />
          <main id="content">
            <AppRouter />
          </main>
          <ToastifyContainer />
          <ModalWindow />
        </>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
