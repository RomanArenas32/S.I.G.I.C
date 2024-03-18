import { Link, Outlet } from "react-router-dom"

export const ReunionApp = () => {
  return (
    <>

      <header className="w-full text-center">
        <h2>oficina de reunion</h2>
        <h5>superintendencia de inteligencia criminal</h5>

      </header>
      <Link to="../reunion/cargareventos">cargar evento</Link>
      <footer>footer</footer>
      
    </>
  )
}
