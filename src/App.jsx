import { AppRoutes } from "./routes/AppRoutes"
import { Profile } from "./profile/Profile"
import { Navegacion } from "./navegacion"

export const App = () => {
  return (
    <>
      <Profile />
      <Navegacion />
      <AppRoutes />
    </>

  )
}
