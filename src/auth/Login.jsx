import { useState } from "react";
import { Logo } from "../utilidades/Logo";
import { Alerta } from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/api/v1/authenticate`, formData);
      setMensaje({ msg: "Login exitoso!", error: false });
      setTimeout(() => {
        navigate("/replace");
      }, 2000);
    } catch (error) {
      setMensaje({
        msg: "Error al iniciar sesión. Verifique sus credenciales e intente nuevamente.",
        error: true,
      });
    }
  };

  const { msg } = mensaje;

  return (
    <div className="grid place-items-center items-center h-full my-32">
      <div className="bg-gray-900 border-4 border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200 shadow-2xl">
        <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
          <Logo estilos={"w-24"} />

          <h1 className="text-white text-2xl">Iniciar sesion</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              placeholder="Usuario"
              type="text"
              name="usuario"
              id="usuario"
              onChange={handleInputChange}
              value={formData.usuario}
            />
            <input
              className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              placeholder="contraseña"
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
              value={formData.password}
            />
            <button
              className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-4 border-gray-700 hover:border-blue-500 transition-all duration-200"
              type="submit"
            >
              Ingresar
            </button>

            {msg && <Alerta mensaje={mensaje} />}
          </form>
        </div>
      </div>
    </div>
  );
};
