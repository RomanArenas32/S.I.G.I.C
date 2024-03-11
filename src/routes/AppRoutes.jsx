import { Home } from "../pages";
import { Route, Routes } from "react-router-dom";
import { ReunionApp } from "../reunion";
import { CargarEventos } from "../reunion/pages";
import { Login } from "../auth";

const logeado = false;


export const AppRoutes = () => {

  return (
    <>
      {
        logeado
          ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/reunion" element={<ReunionApp />} />
            <Route path="/reunion/cargareventos" element={<CargarEventos />} />
          </Routes>
          :
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Login />} />
          </Routes>
      }



    </>


  )
}

