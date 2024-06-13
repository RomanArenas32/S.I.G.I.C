import { useContext, useEffect, useState } from "react";
import { Alerta, BotonVolver } from "../utils";
import { Logo } from "../utilidades/Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthProvider";

export const CrearPassword = () => {
  const url = import.meta.env.VITE_API_URL;

  const { usuarioAuth } = useContext(AuthContext);

  console.log(usuarioAuth);

  const navigate = useNavigate();
  const [repetirPass, setRepetirPass] = useState("");
  const [formData, setFormData] = useState({
    legajo: usuarioAuth.legajo,
    password: "",
  });
  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    if (!usuarioAuth) {
      return;
    }
    if (usuarioAuth) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        legajo: usuarioAuth.legajo,
      }));
    }
  }, [usuarioAuth]);

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
        navigate("/");
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
        <div className="text-lg text-center mb-4 font-bold">
          <h2>Hola {usuarioLogeado.nombre}!</h2>
          <h3>Si es tu primer ingreso deberás cambiar la contraseña</h3>
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
            </form>
          </div>
        </div>
        {msg && <Alerta mensaje={mensaje} />}
      </div>
    </>
  );
};
