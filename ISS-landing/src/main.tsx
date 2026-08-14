import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Inicio } from './pages/Inicio.tsx'
import { Servicios } from './pages/Servicios.tsx'

const router = createBrowserRouter([
  {
    path: "ISS-Soluciones-Landing/",
    element: <Inicio />,
  },
  {
    path: "ISS-Soluciones-Landing/Servicios",
    element: <Servicios />,
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
