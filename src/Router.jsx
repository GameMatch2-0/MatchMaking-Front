import { createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import Planos from './pages/planos'
import Sobre from './pages/Sobre'
import Profile from './pages/Profile'
import Contato from './pages/Contato'

const routes = createBrowserRouter([
  { path: '/', element: <Index /> },
  { path: '/planos', element: <Planos /> },
  { path: '/sobre', element: <Sobre /> },
  { path: '/contato', element: <Contato /> },
  { path: '/profile', element: <Profile /> },
])

export default routes;
