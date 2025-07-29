import AppRouter from '../../../app/providers/AppRouter'
import './App.css'
import { BrowserRouter } from 'react-router'

const App = () => {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
