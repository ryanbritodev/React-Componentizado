import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sobre from './routes/Sobre.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'
import PageNotFound from './routes/PageNotFound.jsx'

const router = createBrowserRouter([
  // Objeto de rota
  {
    path: "/",
    element: <App />,
    // Abre a rota raiz, precisa importar o componente App
    children: [
      // Filhos da rota raiz, tudo que vem depois da barra raiz é filho
      // Ele irá renderizar o componente Sobre
      {index: true, element: <ConteudoPrincipal />},
      {path: "sobre", element: <Sobre />},
      {path: "*", element: <PageNotFound />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Tirando a renderização de App e adicionando o provedor de rotas*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
