import { useState } from "react";
import { delegaciones, eventoPorTipo, tipoEvento, partidos, localidades } from '../../info'

export const CargarEventos = () => {


  const [image, setImage] = useState(null);
  const [organizaciones, setOrganizaciones] = useState([]);

  const formatearOrganizaciones = (organizacion) => {
    const arrayOrganizaciones = organizacion.split("-");
    setOrganizaciones(arrayOrganizaciones)
  }

  const [formData, setFormData] = useState({
    responsable: "",
    partido: "",
    localidad: "",
    tipo: "",
    subtipo: "",
    programacion: "",
    infoDelegacion: "",
    inforReunion: "",
    fecha: "",
    hora: "",
    coordenadas: "",
    banner: image,
    organizaciones: organizaciones,
  });

  formData.organizaciones = organizaciones;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };



  return (

    <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6">
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
              id="partido" onChange={handleInputChange} value={formData.partido}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              {
                partidos.map(p => (
                  <option className="font-semibold" key={p}>{p}</option>
                ))
              }
            </select>
            <select
              id="localidad" onChange={handleInputChange} value={formData.localidad}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              {
                localidades.map(l => (
                  <option className="font-semibold" key={l}>{l}</option>
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


          <div className="flex flex-col w-auto">

            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="date"
              id="fecha"
              onChange={handleInputChange} value={formData.fecha}
            />
            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="time"
              id="hora"
              onChange={handleInputChange} value={formData.hora}
            />
            <input
              placeholder="ej: -36.781083, -59.867621"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="coordenadas"
              onChange={handleInputChange} value={formData.coordenadas}
            />

            <textarea placeholder="ORGANIZACIONES SOCIALES, SINDICATOS ETC - Separados cada un guion"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={e => formatearOrganizaciones(e.target.value)}>
            </textarea>

            {/** CARGA DEL BANNER */}

            <label htmlFor="banner" className="text-gray-300 text-center pb-2">Cargar un Banner</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="py-4 px-4 bg-gray-700 rounded-lg text-sm text-gray-300"
            />


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
  );

}
