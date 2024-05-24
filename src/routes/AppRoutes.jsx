import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages";
import { ReunionApp } from "../reunion";
import { CargarEventos, VistaEventos } from "../reunion/pages";
import { Login } from "../auth";
import { GestionUsuarios } from "../superadmin/GestionUsuarios";
import { CrearUsuario, DetallesUsuario } from "../superadmin/pages";
import { PanelReunion } from "../reunion/administrador/PanelReunion";
import { AgregarMotivoEvento, AgregarOrganizacion, EditarMotivoEvento, EditarOrganizacion } from "../reunion/administrador/modificarFormularios";

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
          <Route path="/reunion/formularios" element={<PanelReunion />} />
          <Route path="/reunion/formularios/cargaorg" element={<AgregarOrganizacion />} />
          <Route path="/reunion/formularios/cargamotev" element={<AgregarMotivoEvento />} />
          <Route path="/reunion/formularios/:id" element={<EditarOrganizacion />} />
          <Route path="/reunion/formularios/ev/:id" element={<EditarMotivoEvento />} />



          {/* GESTION DE UAURIOS - SUPERADMINISTRADOR */}
          <Route path="/admin" element={<GestionUsuarios />} />
          <Route path="/admin/createus" element={<CrearUsuario />} />
          <Route path="/admin/usuarios/:legajo" element={<DetallesUsuario />} />
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
