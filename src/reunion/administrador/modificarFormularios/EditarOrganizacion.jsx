import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const EditarOrganizacion = () => {
    const url = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const obtenerOrgPorId = async () => {
            try {
                const resp = await axios.get(`${url}/api/v1/organizaciones/${id}`);
                console.log(resp);
            } catch (error) {
                console.log(error);
            }
        };
    
        obtenerOrgPorId();
    }, []);
    
  return (
    <div>EditarOrganizacion</div>
  )
}
