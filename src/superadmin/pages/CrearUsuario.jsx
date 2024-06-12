import { useState } from "react";
import { delegaciones } from "../../info";
import { roles } from "../../info/roles";
import axios from "axios";
import { Alerta, BotonVolver } from "../../utils";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;

export const CrearUsuario = () => {

    const navigate = useNavigate();
  const [mensaje, setMensaje] = useState({});
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    delegacion: "",
    usuario: "",
    password: "",
    rol: "USER_ROLE",
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
      formData.legajo.trim() === ""
    ) {
      setMensaje({ error: true, msg: "No puede haber campos vacios" });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
    formData.usuario = `${formData.apellido.toUpperCase()}${formData.legajo}`;
    formData.password = `${formData.legajo}`;
    try {
   
      const resp = await axios.post(`${url}/api/v1/usuarios`, formData);
      setMensaje({error: false, msg: resp.data.mensaje});
      setTimeout(() => {
        setMensaje({})
        navigate('../admin')
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
    <>
    <BotonVolver/>
      <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2">
        Registre un efectivo
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
              placeholder="legajo sin puntos ni comas"
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

        <button
          className="w-full my-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          type="submit"
        >
          Registrar efectivo
        </button>
        {msg && <Alerta mensaje={mensaje} />}
      </form>
    </div>
    </>
  
  );
};
