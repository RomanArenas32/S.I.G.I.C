import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages";
import { ReunionApp } from "../reunion";
import { CargarEventos, VistaEventos } from "../reunion/pages";
import { Login } from "../auth";
import { GestionUsuarios } from "../superadmin/GestionUsuarios";
import { CrearUsuario } from "../superadmin/pages";

const logeado = true;



export const AppRoutes = () => {
  return (
    <Routes>
      {logeado ? (
        <>
          <Route path="/" element={<Home />} />

          {/* of.reunion */}
          <Route path="/reunion" element={<ReunionApp />} />
          <Route path="/reunion/cargareventos" element={<CargarEventos />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          {/* of. reunion -ADMINISTRADORES */}
          <Route path="/reunion/vista" element={<VistaEventos />} />

          {/* GESTION DE UAURIOS - SUPERADMINISTRADOR */}
          <Route path="/admin" element={<GestionUsuarios />} />
          <Route path="/admin/createus" element={<CrearUsuario />} />


        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};
