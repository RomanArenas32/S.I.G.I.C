import { axiosCreate } from "../config/axios";



const usuariosService = {
    crearUsuario: async (usuario) => {
        const response = await axiosCreate('post', 'api/v1/usuarios', usuario)
        return response;
    },
    editarUsuario: async(usuario, id) =>{
        const response = await axiosCreate('put', `api/v1/usuarios/${id}`, usuario)
        return response;
    },
    listarUsuarios: async() =>{
        const response = await axiosCreate('get', 'api/v1/usuarios')
        return response;
    },
    banearUsuarios: async(id) =>{
        const response = await axiosCreate('put', `api/v1/usuarios/${id}`, usuario)
        return response;
    },
    
};

export default usuariosService;