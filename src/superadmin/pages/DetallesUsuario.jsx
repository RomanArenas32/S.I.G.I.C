import React, { useEffect, useState } from "react";
import { delegaciones } from "../../info";
import { roles } from "../../info/roles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Alerta } from "../../utils";

export const DetallesUsuario = () => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { legajo } = useParams();

  const [efectivoSeleccionado, setEfectivoSeleccionado] = useState({});

  useEffect(() => {
    const obtenerUsuarioPorLegajo = async () => {
      try {
        const resp = await axios.get(`${url}/api/v1/usuarios/${legajo}`);
        setEfectivoSeleccionado(resp.data);
        setFormData({
          ...formData,
          nombre: resp.data.nombre,
          apellido: resp.data.apellido,
          legajo: resp.data.legajo,
          rol: resp.data.rol,
          delegacion: resp.data.delegacion,
        });
      } catch (error) {
        console.log(error);
      }
    };

    obtenerUsuarioPorLegajo();
  }, []);

  const [mensaje, setMensaje] = useState({});
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    delegacion: "",
    usuario: "",
    password: "",
    rol: "",
    estado: true,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.usuario = efectivoSeleccionado.usuario;
    formData.password = efectivoSeleccionado.password;

    if (formData.delegacion[1] == "-" || formData.rol[1] == "-") {
      setMensaje({ error: true, msg: "Seleccione un rol y delegacion" });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }

    if (
      formData.nombre.trim() === "" ||
      formData.apellido.trim() === "" ||
      formData.delegacion.trim() === "" ||
      formData.rol.trim() === "" ||
      formData.legajo.trim() === "" ||
      formData.usuario.trim() === "" ||
      formData.password.trim() === ""

    ) {
      setMensaje({ error: true, msg: "No puede haber campos vacios" });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
    try {
      console.log(formData);
      const resp = await axios.patch(`${url}/api/v1/usuarios`, formData);
      setMensaje({ error: false, msg: resp.data.mensaje });
      setMensaje({error: false, msg: "Usuario actualizado correctamente"});
      setTimeout(() => {
        setMensaje({});
        navigate("../admin");
      }, 3000);
    } catch (error) {
      setMensaje({ error: true, msg: error.response.data.message });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
  };
  const { msg } = mensaje;

  return (
    <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6 pt-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2">
        Editar efectivo
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col">
            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="apellido"
              placeholder="apellido"
              onChange={handleInputChange}
              value={formData.apellido}
            />

            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="nombre"
              placeholder="nombre completo"
              onChange={handleInputChange}
              value={formData.nombre}
            />

            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="legajo"
              placeholder="legajo"
              onChange={handleInputChange}
              value={formData.legajo}
            />
            <select
              id="delegacion"
              onChange={handleInputChange}
              value={formData.delegacion}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              {delegaciones.map((delegacion) => (
                <option className="font-semibold" key={delegacion}>
                  {delegacion}
                </option>
              ))}
            </select>
            <select
              id="rol"
              onChange={handleInputChange}
              value={formData.rol}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              {roles.map((rol) => (
                <option className="font-semibold" key={rol}>
                  {rol}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex w-full justify-between gap-4">
        {
          formData.estado ? <p className="text-white font-bold text-lg uppercase">Deshabilitar</p> : <p className="text-white font-bold text-lg uppercase">Habilitar</p>
        }
        
         <label className="relative inline-flex items-center cursor-pointer">
          <input className="sr-only peer" value={formData.estado} type="checkbox" onChange={() => setFormData({ ...formData, estado: !formData.estado })}/>
          <div className="group peer ring-0 bg-gray-50 border-2 border-gray-900 rounded-full outline-none duration-700 after:duration-200 w-24 h-12  shadow-md peer-checked:bg-gradient-to-r  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-900 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1  peer-checked:after:translate-x-12 peer-hover:after:scale-95">
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="absolute  top-1 left-12 fill-green-600 w-10 h-10"
            >
              <path
                d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z"
                className="svg-fill-primary"
              ></path>
            </svg>

            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="absolute top-1 left-1 fill-red-600  w-10 h-10"
            >
              <path
              fillRule="evenodd"
                d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z"
              ></path>
            </svg>
          </div>
        </label>
        </div>
       

        <button
          className="w-full my-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          type="submit"
        >
          Guardar cambios
        </button>
        {msg && <Alerta mensaje={mensaje} />}
      </form>
    </div>
  );
};
