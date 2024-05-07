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
    <div className="flex flex-col items-center h-full">
      <div className="my-6">
        <h2 className="text-4xl mb-4 font-bold text-center">
          Bienvenido a la gestión de usuarios
        </h2>
        <h3 className="text-xl text-center">
          Desde aqui podrá editar, crear y restringir usuarios
        </h3>
      </div>

      <div className="my-6 flex flex-col gap-4 md:flex-row">
        <button className=" uppercase group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
          <Link to="../admin/createus">Registrar un efectivo</Link>
        </button>
        <button
          className=" uppercase group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur"
          onClick={mostrarActivos}
        >
          Efectivos activos
        </button>
        <button
          className=" uppercase group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur"
          onClick={mostrarInactivos}
        >
          Efectivos INACTIVOS
        </button>
      </div>
      {mostrarLista && <ListaEfectivos />}
      {mostrarListaInactivos && <ListaEfectivosInactivos />}
    </div>
  );
};
