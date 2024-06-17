import axios from "axios";
import { createContext,  useEffect,  useState } from "react";
const url = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuarioAuth, setUsuarioAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        };
        const { data } = await axios.get(`${url}/api/v1/authenticate/profile`, config);
        setUsuarioAuth(data);

      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response.data.msg);
        }
      }
    };

    autenticarUsuario();
  }, []);

  console.log(usuarioAuth)

  return (
    <AuthContext.Provider
      value={{
        usuarioAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export {
  AuthProvider
}

export default AuthContext