import { useEffect, useState } from "react";
import { Alerta, BotonVolver } from "../utils";
import { Logo } from "../utilidades/Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CrearPassword = () => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [repetirPass, setRepetirPass] = useState("");
  const [usuarioLogeado, setUsuarioLogeado] = useState({});
  const[formData, setFormData] = useState({
    legajo: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    const usuarioString = localStorage.getItem("usuario");
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;
    if (!usuario) {
      return;
    }
    if (usuario) {
        setUsuarioLogeado(usuario);
        setFormData((prevFormData) => ({
          ...prevFormData,
          legajo: usuario.legajo,
        }));
      }
    setUsuarioLogeado(usuario);
  }, []);
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.trim() === "") {
      setMensaje({ error: true, msg: "No puede haber campos vacios" });
      setTimeout(() => {
        setMensaje({});
      }, 1000);
      return;
    }
    if (formData.password !== repetirPass) {
      setMensaje({ error: true, msg: "Las contraseñas no cohinciden" });
      setTimeout(() => {
        setMensaje({});
      }, 1000);
      return;
    }
    try {
      const resp = await axios.patch(
        `${url}/api/v1/usuarios/changepassword`,
        formData
      );
      setMensaje({ error: false, msg: "Usuario actualizado correctamente" });
      setTimeout(() => {
        navigate('/')
      }, 1000);
    } catch (error) {
      console.log(error);
      setMensaje({
        error: true,
        msg: "Error al actualizar. Intente nuevamente",
      });
      setTimeout(() => {
        setMensaje({});
      }, 1000);
    }
  };

  const { msg } = mensaje;
  return (
    <>
      <BotonVolver />
      <div className="grid place-items-center items-center h-full my-4">
        <div className="text-lg text-center mb-4 font-semibold">
          <h2>Hola {usuarioLogeado.nombre}!</h2>
          <h3>Completa el formulario a continuacion</h3>
          <h3>Si deseas cambiar tu contraseña</h3>
        </div>

        <div className="bg-gray-900 border-4 border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200 shadow-2xl">
          <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">
            <Logo estilos={"w-24"} />

            <h1 className="text-white text-2xl">Cambia la contraseña</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Nueva contraseña"
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                value={formData.password}
              />
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Repita la contraseña"
                type="password"
                name="repetir"
                onChange={(e) => setRepetirPass(e.target.value)}
                value={repetirPass}
              />
              <button
                className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-4 border-gray-700 hover:border-blue-500 transition-all duration-200"
                type="submit"
              >
                Guardar cambios
              </button>

              {msg && <Alerta mensaje={mensaje} />}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
