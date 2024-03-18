import { useState } from "react";
import { delegaciones } from '../../info'

export const CargarEventos = () => {

  const [filtro, setFiltro] = useState('');

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  console.log(delegaciones)
  const [formData, setFormData] = useState({
    responsable: "",
    password: ""
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
    <div className="grid place-items-center items-center h-full my-32">

      <div className="bg-gray-900 border-4 border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200 shadow-2xl">
        <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">

          <h1 className="text-white text-2xl">Carga de eventos</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col justify-center items-center ">
              <input
              className="w-full text-center p-2"
                type="text"
                value={filtro}
                onChange={handleChange}
                placeholder="Buscar delegación..."
                
              />
              <select className="text-white">
                {delegaciones
                  .filter(delegacion => delegacion.toLowerCase().includes(filtro.toLowerCase()))
                  .map(delegacion => (
                    <option key={delegacion} value={formData.responsable} id="responsable" onChange={handleInputChange}>{delegacion}</option>
                  ))}
              </select>
            </div>

            <input
              className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              placeholder="Usuario"
              type="text"
              name="user"
              id="user"
              onChange={handleInputChange} value={formData.user}
            />
            <input
              className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              placeholder="contraseña"
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange} value={formData.password}
            />
            <button
              className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-4 border-gray-700 hover:border-blue-500 transition-all duration-200"
              type="submit"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
