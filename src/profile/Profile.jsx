import { DarkMode, Logo } from "../utilidades"

export const Profile = () => {
  return (
    <div className="p-4 flex flex-row bg-slate-900 text-white justify-between">
      <div className="flex flex-row items-center gap-6">
        <Logo estilos={{width: 'w-20'}}/>
        <h1 className="text-5xl font-bold">S.I.G.I.C</h1>
      </div>

      <div className="flex flex-row items-center gap-8">
        <DarkMode/>
        <h2>iniciar sesion</h2>
        <h2>perfil</h2>
      </div>
    </div>
  )
}
