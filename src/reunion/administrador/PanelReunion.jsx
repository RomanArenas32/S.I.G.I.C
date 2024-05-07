import { useState } from "react";

export const PanelReunion = () => {
  const [tipoEvento, setTipoEvento] = useState([]);
  const [organizaciones, setOrganizaciones] = useState([]);

  return (
    <div className="h-full p-4">
      <div className="flex gap-4 flex-col md:flex-row">
        <button className="h-16 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          Tipo de eventos
        </button>
        <button className="h-16 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          Organizaciones
        </button>
      </div>
    </div>
  );
};
