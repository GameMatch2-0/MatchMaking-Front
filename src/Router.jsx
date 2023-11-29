import { createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'

const routes = createBrowserRouter([
  { path: '/', element: <Index /> },
  // { path: '/planos', element: <Planos /> },
  // { path: '/sobre', element: <Sobre /> },
  // { path: '/contato', element: <Contato /> },
])

export default routes;
