import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "../pages";
import { ReunionApp } from "../reunion";
import { CargarEventos } from "../reunion/pages";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    path: '/reunion',
    element: <ReunionApp />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/reunion/cargareventos',
        element: <CargarEventos/>
      }
    ]
  }
])
