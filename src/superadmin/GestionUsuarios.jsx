import { Link } from "react-router-dom";
import { ListaEfectivos, ListaEfectivosInactivos } from "./pages";
import { useState } from "react";

export const GestionUsuarios = () => {
  const [mostrarLista, setMostrarLista] = useState(false);
  const [mostrarListaInactivos, setMostrarListaInactivos] = useState(false);

  const mostrarActivos = () => {
    setMostrarLista(!mostrarLista);
  };

  const mostrarInactivos = () => {
    setMostrarListaInactivos(!mostrarListaInactivos);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="my-6">
        <h2 className="text-4xl mb-4 font-bold text-center">
          Bienvenido a la gestión de usuarios
        </h2>
        <h3 className="text-xl text-center">
          Desde aqui podrá editar, crear y restringir usuarios
        </h3>
      </div>

      <div className="my-6 flex flex-col gap-4 md:flex-row">
        <button className="h-16 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          <Link to="../admin/createus">Registrar un efectivo</Link>
        </button>
        <button
          onClick={mostrarActivos}
          className="h-16 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          Efectivos activos
        </button>
        <button
          onClick={mostrarInactivos}
          className="h-16 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          Efectivos INACTIVOS
        </button>
      </div>
      {mostrarLista && <ListaEfectivos />}
      {mostrarListaInactivos && <ListaEfectivosInactivos />}
    </div>
  );
};
