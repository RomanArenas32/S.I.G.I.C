import { AppRoutes } from "./routes/AppRoutes";
import { Profile } from "./profile/Profile";
import { Navegacion } from "./navegacion";
import { Footer } from "./footer";

export const App = () => {
  return (
    <>
      <div>
        <Profile />
        <Navegacion />
      </div>

      <AppRoutes />
      <Footer />
    </>
  );
};
