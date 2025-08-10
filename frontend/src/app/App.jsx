import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Header from '../widgets/header/Header.jsx'
import AppRouter from "./providers/router/AppRouter.jsx"
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <>
        <Header />
        <main id='content'>
            <AppRouter />
        </main>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
  )
}

export default App
