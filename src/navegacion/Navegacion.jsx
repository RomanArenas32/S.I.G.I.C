import { MenuHamburguesa } from "./MenuHamburguesa"
import { Menu } from "./Menu"

export const Navegacion = () => {
  return (

    <div className="bg-slate-900">
      <MenuHamburguesa />

      <div className="hidden md:visible md:flex md:flex-row md:justify-evenly">

              <Menu />

      </div>

    </div>

  )
}
