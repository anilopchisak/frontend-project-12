import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Header from '../widgets/header/Header.jsx'
import AppRouter from "./providers/router/AppRouter.jsx"
import ToastifyContainer from "../shared/ui/toastifyContainer/ToastifyContainer.jsx";
import ModalWindow from "../shared/ui/modal/ModalWindow.jsx";

const App = () => {
  return (
    <>
        <Header />
        <main id='content'>
            <AppRouter />
        </main>
        <ToastifyContainer />
        <ModalWindow />
    </>
  )
}

export default App
