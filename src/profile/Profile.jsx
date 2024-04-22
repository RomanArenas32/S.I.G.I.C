import { Link } from "react-router-dom"
import { DarkMode, Logo } from "../utilidades"

export const Profile = () => {
  return (
    <div className="p-4 flex flex-row bg-slate-900 text-white justify-between">
      <div className="flex flex-row items-center gap-6">
        <Logo estilos={'w-24'} />
        <h1 className=" font-bold text-2xl sm:text-5xl">S.I.G.I.C</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <DarkMode />

        <h2> <Link to="../admin">Administrador</Link></h2>
      </div>
    </div>
  )
}
