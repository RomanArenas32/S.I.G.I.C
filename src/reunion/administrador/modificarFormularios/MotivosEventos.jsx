import axios from "axios";
import { useEffect, useState } from "react";
import { Alerta } from "../../../utils";
import { useNavigate } from "react-router-dom";

export const MotivosEventos = () => {
  const [MotivosEventos, setMotivosEv] = useState([]);
  const [mensaje, setMensaje] = useState({});
  const navigate = useNavigate();
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const obtenerMotivoEventos = async () => {
      try {
        const resp = await axios.get(`${url}/api/v1/motivoevento`);
        setMotivosEv(resp.data)
      } catch (error) {
        console.log(error);
      }
    };

    obtenerMotivoEventos();
  }, []);

  const { msg } = mensaje;

  return (
    <div className="flex flex-col gap-4">
      {msg && <Alerta mensaje={mensaje} />}
      <div className="py-8 md:py-0 flex-flex-row w-full justify-between">
        <h2 className="text-center font-semibold text-2xl mt-2">
          {" "}
          Todos los motivos por los cuales puede producirse un evento
        </h2>
        <button
          onClick={() => navigate("../reunion/formularios/cargamotev")}
          className="mt-14 mb-4 h-10 relative py-1 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          Cargar nuevo motivo para evento
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {MotivosEventos.map((motivo) => (
          <div key={motivo.motivo} className="font-semibold">
            <div className="flex flex-row w-full justify-between">
              <p className="text-lg">{motivo.motivo}</p>
              <div>
                <button
                  className="underline bg-yellow-500 p-1"
                  onClick={() => navigate(`../reunion/formularios/ev/${motivo.id}`)}
                >
                  editar
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
