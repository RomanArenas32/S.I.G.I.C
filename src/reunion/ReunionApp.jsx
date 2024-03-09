import { Outlet } from "react-router-dom"

export const ReunionApp = () => {
  return (
    <>
      <nav>navegacion</nav>
      <header>header</header>
        <Outlet/>
      <footer>footer</footer>
    </>
  )
}
