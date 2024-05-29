import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alerta } from "../../../utils";
import axios from "axios";

export const AgregarMotivoEvento = () => {

    const url = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState({});
  const [formData, setFormData] = useState({
    motivo: ""
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
    console.log(formData)
    if (
      formData.motivo.trim() === ""
    ) {
      setMensaje({ error: true, msg: "No puede haber campos vacios" });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
    try {
      const resp = await axios.post(`${url}/api/v1/motivoevento`, formData);
      console.log(resp)
      setMensaje({ error: false, msg: resp.data.mensaje });
      setTimeout(() => {
        setMensaje({});
        navigate("../reunion/formularios");
      }, 3000);
    } catch (error) {
        console.log(error)
      setMensaje({ error: true, msg: error.response.data.message });
      setTimeout(() => {
        setMensaje({});
      }, 3000);
      return;
    }
  };

  const { msg } = mensaje;
  return (
    <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6">
    <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2 text-center">
      Agrege un nuevo motivopor el cual pueda producirse un evento
    </h2>

    <form onSubmit={handleSubmit} className="w-3/5">
      <div className="flex flex-col">
        <input
          className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-14"
          type="text"
          id="motivo"
          placeholder="Explique el motivo del evento"
          onChange={handleInputChange}
          value={formData.motivo}
        />
      </div>

      <button
        className="w-full my-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        type="submit"
      >
        Agregar
      </button>
      {msg && <Alerta mensaje={mensaje} />}
    </form>
  </div>
  )
}
