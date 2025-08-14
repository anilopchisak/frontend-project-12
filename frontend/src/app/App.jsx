import 'bootstrap/dist/css/bootstrap.min.css'
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
        <div className="w-100 h-100 bg-light">
          <div className="w-100 h-100 container">
            <div className="d-flex flex-column h-100">
              <Header />
              <main id="main" className="my-4 h-100 w-100 overflow-hidden">
                <AppRouter />
              </main>
              <ToastifyContainer />
              <ModalWindow />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
