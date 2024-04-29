import { useState } from "react";
import {
  delegaciones,
  eventoPorTipo,
  tipoEvento,
  partidos,
  conflictividad,
} from "../../info";

//ordenamiento de los partidos alfabeticamente
const partidosOrdenados = {};
Object.keys(partidos)
  .sort()
  .forEach((partido) => {
    partidosOrdenados[partido] = partidos[partido];
  });


export const CargarEventos = () => {
  const [image, setImage] = useState(null);
  const [organizaciones, setOrganizaciones] = useState([]);
  const [partidoSeleccionado, setPartidoSeleccionado] = useState("");

  const formatearOrganizaciones = (organizacion) => {
    const arrayOrganizaciones = organizacion.split("-");
    setOrganizaciones(arrayOrganizaciones);
  };

  const [formData, setFormData] = useState({
    responsable: "",
    partido: partidoSeleccionado,
    localidad: "",
    tipo: "",
    subtipo: "",
    programacion: "",
    infoDelegacion: "",
    inforReunion: "",
    extracto: "",
    fecha: "",
    hora: "",
    coordenadas: "",
    entidad: "",
    barrio: "",
    conflictividad: "",
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
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.partido = partidoSeleccionado;
    console.log(formData);
  };

  return (
    <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2">
        Carga de eventos
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col">
            <select
              id="responsable"
              onChange={handleInputChange}
              value={formData.responsable}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              {delegaciones.map((delegacion) => (
                <option className="font-semibold" key={delegacion}>
                  {delegacion}
                </option>
              ))}
            </select>

            <select
              value={partidoSeleccionado}
              onChange={(e) => setPartidoSeleccionado(e.target.value)}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              <option value={formData.partido} id="partido">--Seleccione un partido--</option>
              {Object.keys(partidosOrdenados).map((partido) => (
                <option key={partido} value={partido}>
                  {partido}
                </option>
              ))}
            </select>

            <select
              id="localidad"
              value={formData.localidad} 
              onChange={handleInputChange} 
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              <option value="">--Seleccione una localidad--</option>
              {partidoSeleccionado &&
                partidos[partidoSeleccionado].map((localidad) => (
                  <option key={localidad} value={localidad}>
                    {localidad}
                  </option>
                ))}
            </select>

            <select
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="tipo"
              onChange={handleInputChange}
              value={formData.tipo}
            >
              {eventoPorTipo.map((evento) => (
                <option className="font-semibold" key={evento}>
                  {evento}
                </option>
              ))}
            </select>

            <input
              placeholder="ej: Reclamo en contra del DNU"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="subtipo"
              onChange={handleInputChange}
              value={formData.subtipo}
            />

            <select
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="programacion"
              onChange={handleInputChange}
              value={formData.programacion}
            >
              {tipoEvento.map((evento) => (
                <option className="font-semibold" key={evento}>
                  {evento}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Informe de la delegacion"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="infoDelegacion"
              onChange={handleInputChange}
              value={formData.infoDelegacion}
            ></textarea>

            <textarea
              placeholder="Informe de Reunion"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="inforReunion"
              onChange={handleInputChange}
              value={formData.inforReunion}
            ></textarea>
            <textarea
              placeholder="Extracto (Breve reseña del informe)"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="extracto"
              onChange={handleInputChange}
              value={formData.extracto}
            ></textarea>
          </div>

          <div className="flex flex-col w-auto">
            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="date"
              id="fecha"
              onChange={handleInputChange}
              value={formData.fecha}
            />
            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="time"
              id="hora"
              onChange={handleInputChange}
              value={formData.hora}
            />
            <input
              placeholder="ej: -36.781083, -59.867621"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="coordenadas"
              onChange={handleInputChange}
              value={formData.coordenadas}
            />

            <input
              placeholder="lugar o entidad. ej: Ministerio de trabajo"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="entidad"
              onChange={handleInputChange}
              value={formData.entidad}
            />
            <input
              placeholder="Indique barrio donde transcurrirá el evento"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id="barrio"
              onChange={handleInputChange}
              value={formData.barrio}
            />
            <textarea
              placeholder="ORGANIZACIONES SOCIALES, SINDICATOS ETC - Separados cada un guion"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              onChange={(e) => formatearOrganizaciones(e.target.value)}
            ></textarea>
            <select
              id="responsable"
              onChange={handleInputChange}
              value={formData.responsable}
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            >
              {conflictividad.map((c) => (
                <option className="font-semibold" key={c}>
                  {c}
                </option>
              ))}
            </select>

            {/** CARGA DEL BANNER */}

            <div className="bg-gray-700 flex flex-col rounded-lg">
              <label
                htmlFor="banner"
                className="text-gray-300 text-center py-2 "
              >
                Cargar un Banner
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="py-4 px-4   text-sm text-gray-300"
              />
            </div>
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
};
