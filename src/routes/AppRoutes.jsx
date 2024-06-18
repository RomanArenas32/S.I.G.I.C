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

  if (rol === undefined) {
    return (
      <Routes>
        <Route path="/*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  } else {
    if (rol === "ADMIN_ROLE") {
      return (
        <Routes>
          {/* Rutas para ADMIN_ROLE */}
          <Route path="/reunion" element={<ReunionApp />} />
          <Route path="/reunion/cargareventos" element={<CargarEventos />} />
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
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/replace" element={<CrearPassword />} />
        </Routes>
      );
    }

    if (rol === "SUPERADMIN_ROLE") {
      return (
        <Routes>
          {/* Rutas para SUPERADMIN_ROLE */}
          <Route path="/admin" element={<GestionUsuarios />} />
          <Route path="/admin/createus" element={<CrearUsuario />} />
          <Route path="/admin/usuarios/:legajo" element={<DetallesUsuario />} />
          <Route path="/reunion/vista" element={<VistaEventos />} />
          <Route path="/*" element={<Navigate to="/admin" replace />} />

          {/* Rutas para ADMIN_ROLE */}
          <Route path="/reunion" element={<ReunionApp />} />
          <Route path="/reunion/cargareventos" element={<CargarEventos />} />
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
        </Routes>
      );
    }

    if (rol === "USER_ROLE") {
      return (
        <Routes>
          {/* Rutas para USER_ROLE */}
          <Route path="/replace" element={<CrearPassword />} />
          <Route path="/reunion" element={<ReunionApp />} />
          <Route path="/reunion/cargareventos" element={<CargarEventos />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      );
    }
  }

  return null;
};
