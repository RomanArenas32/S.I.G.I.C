import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages";
import { ReunionApp } from "../reunion";
import { CargarEventos, VistaEventos } from "../reunion/pages";
import { CrearPassword, Login } from "../auth";
import { GestionUsuarios } from "../superadmin/GestionUsuarios";
import { CrearUsuario, DetallesUsuario } from "../superadmin/pages";
import { PanelReunion } from "../reunion/administrador/PanelReunion";
import {
  AgregarMotivoEvento,
  AgregarOrganizacion,
  EditarMotivoEvento,
  EditarOrganizacion,
} from "../reunion/administrador/modificarFormularios";

export const AppRoutes = () => {
  const { usuarioAuth } = useContext(AuthContext);
  const { rol, estado } = usuarioAuth;

  console.log(rol, estado);

  return (
    <Routes>
      {estado ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Navigate to="/" replace />} />


          {/* of.reunion */}
          <Route path="/reunion" element={<ReunionApp />} />
          <Route path="/reunion/cargareventos" element={<CargarEventos />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          {/* of. reunion -ADMINISTRADORES */}
          <Route path="/reunion/vista" element={<VistaEventos />} />
          <Route path="/reunion/formularios" element={<PanelReunion />} />
          <Route
            path="/reunion/formularios/cargaorg"
            element={<AgregarOrganizacion />}
          />
          <Route
            path="/reunion/formularios/cargamotev"
            element={<AgregarMotivoEvento />}
          />
          <Route
            path="/reunion/formularios/:id"
            element={<EditarOrganizacion />}
          />
          <Route
            path="/reunion/formularios/ev/:id"
            element={<EditarMotivoEvento />}
          />

          {/* GESTION DE USUARIOS - SUPERADMINISTRADOR */}
          <Route path="/admin" element={<GestionUsuarios />} />
          <Route path="/admin/createus" element={<CrearUsuario />} />
          <Route path="/admin/usuarios/:legajo" element={<DetallesUsuario />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" replace />} />
          //CAMBIO DE PASSWORD AL PRIMER INGRESO
          <Route path="/replace" element={<CrearPassword />} />
        </>
      )}

    </Routes>
  );
};
