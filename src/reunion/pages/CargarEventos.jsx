import { useState } from "react";
import { delegaciones, eventoPorTipo, tipoEvento } from '../../info'

export const CargarEventos = () => {



  const [formData, setFormData] = useState({
    responsable: "",
    tipo: "",
    subtipo: "",
    programacion: "",
    infoDelegacion: "",
    inforReunion: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className=" h-max  mb-28 mt-20 p-10 w-full grid place-items-center ">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-2xl p-6 grid place-items-center ">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2">Carga de eventos</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 md:flex-row">

            <div className="flex flex-col">

              <select
                id="responsable" onChange={handleInputChange} value={formData.responsable}
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              >
                {
                  delegaciones.map(delegacion => (
                    <option className="font-semibold" key={delegacion}>{delegacion}</option>
                  ))
                }
              </select>

              <select
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="tipo" onChange={handleInputChange} value={formData.tipo}
              >
                {
                  eventoPorTipo.map(evento => (
                    <option className="font-semibold" key={evento}>{evento}</option>
                  ))
                }
              </select>

              <input
                placeholder="ej: Reclamo en contra del DNU"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                id="subtipo"
                onChange={handleInputChange} value={formData.subtipo}
              />

              <select
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="programacion" onChange={handleInputChange} value={formData.programacion}
              >
                {
                  tipoEvento.map(evento => (
                    <option className="font-semibold" key={evento}>{evento}</option>
                  ))
                }
              </select>

            </div>


            <div className="flex flex-col">

              <textarea
                placeholder="Informe de la delegacion"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="infoDelegacion" onChange={handleInputChange} value={formData.infoDelegacion}
              ></textarea>

              <textarea
                placeholder="Informe de Reunion"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                id="inforReunion" onChange={handleInputChange} value={formData.inforReunion}
              ></textarea>


            </div>
          </div>



          <button
            className="w-full my-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Cargar
          </button>

        </form>
      </div>
    </div>
  );

}
