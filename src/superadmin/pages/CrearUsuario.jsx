import { useState } from "react";
import { delegaciones } from "../../info";
import { roles } from "../../info/roles";

export const CrearUsuario = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        legajo: "",
        delegacion: "",
        rol: "",
        estado: true,
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

        <div className=" bg-gray-800 rounded-lg shadow-2xl p-2 grid place-items-center my-4 md:mx-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase pb-2">Registre un efectivo</h2>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 md:flex-row">

                    <div className="flex flex-col">

                        <input
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                            id="nombre"
                            placeholder="nombre completo"
                            onChange={handleInputChange} value={formData.nombre}
                        />
                        <input
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                            id="apellido"
                            placeholder="apellido"
                            onChange={handleInputChange} value={formData.apellido}
                        />
                        <input
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                            id="legajo"
                            placeholder="legajo"
                            onChange={handleInputChange} value={formData.legajo}
                        />
                        <select
                            id="delegacion" onChange={handleInputChange} value={formData.delegacion}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        >
                            {
                                delegaciones.map(delegacion => (
                                    <option className="font-semibold" key={delegacion}>{delegacion}</option>
                                ))
                            }
                        </select>
                        <select
                            id="rol" onChange={handleInputChange} value={formData.rol}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        >
                            {
                                roles.map(rol => (
                                    <option className="font-semibold" key={rol}>{rol}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <button
                    className="w-full my-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    type="submit"
                >
                    Registrar efectivo
                </button>

            </form>
        </div>
    );

}
