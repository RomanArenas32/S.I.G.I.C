import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alerta } from "../../../utils";

export const EditarOrganizacion = () => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [organizacionSelec, setOrganizacionSelec] = useState({});
  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    const obtenerOrgPorId = async () => {
      try {
        const resp = await axios.get(
          `${url}/api/v1/organizaciones/obtener/${id}`
        );
        setOrganizacionSelec(resp.data);
        setFormData({
          ...formData,
          nombre_organizacion: resp.data.nombre_organizacion,
          observacion_organizacion: resp.data.observacion_organizacion,
        });
      } catch (error) {
        console.log(error);
        setMensaje({
          error: true,
          msg: "Error al obtener los datos para editar. Intente nuevamente",
        });
      }
    };

    obtenerOrgPorId();
  }, []);

  const [formData, setFormData] = useState({
    nombre_organizacion: "",
    observacion_organizacion: "",
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
    if (
      formData.nombre_organizacion.trim() === "" ||
      formData.observacion_organizacion.trim() === ""
    ) {
      setMensaje({ error: true, msg: "No puede haber campos vacios" });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
    try {
      console.log(formData);
      const resp = await axios.patch(`${url}/api/v1/organizaciones`, formData);
      setMensaje({ error: false, msg: resp.data.mensaje });
      setTimeout(() => {
        setMensaje({});
        navigate("../reunion/formularios");
      }, 3000);
    } catch (error) {
      setMensaje({ error: true, msg: "Error al cargar organizacion" });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
  };

  const { msg } = mensaje;
  return (
    <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2">
        Editar organizacion
      </h2>

      <form onSubmit={handleSubmit} className="w-3/5 " >
        <div className="flex flex-col">
          <input
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            id="nombre_organizacion"
            placeholder="Nombre de la organizacion"
            onChange={handleInputChange}
            value={formData.nombre_organizacion}
          />

          <textarea
            placeholder="Datos de la organizacion"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            id="observacion_organizacion"
            onChange={handleInputChange}
            value={formData.observacion_organizacion}
          ></textarea>
        </div>

        <button
          className="w-full my-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          type="submit"
        >
          Guardar Cambios
        </button>
        {msg && <Alerta mensaje={mensaje} />}
      </form>
    </div>
  );
};
