import { AppRoutes } from "./routes/AppRoutes";
import { Profile } from "./profile/Profile";
import { Navegacion } from "./navegacion";
import { Footer } from "./footer";
import { AuthProvider } from "./context/AuthProvider";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <div>
          <Profile />
          <Navegacion />
        </div>

        <AppRoutes />
        <Footer />
      </AuthProvider>
    </>
  );
};
