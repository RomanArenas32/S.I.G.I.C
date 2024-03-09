import { Link, useRouteError } from "react-router-dom"

export const NotFound = () => {

  const error = useRouteError();

  return (
    <>
      <h2>Erroor! pagina no encontrada</h2>
      <Link to="/">Volver a la pagina principal</Link>
    </>

  )
}
