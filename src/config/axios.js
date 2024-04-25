import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export const axiosCreate = async (method, path, data = null) => {
  try {
    let response;
    switch (method.toUpperCase()) {
      case 'GET':
        response = await axios.get(`${url}/${path}`);
        break;
      case 'POST':
        response = await axios.post(`${url}/${path}`, data);
        break;
      case 'PUT':
        response = await axios.put(`${url}/${path}`, data);
        break;
      case 'PATCH':
        response = await axios.patch(`${url}/${path}`, data);
        break;
      case 'DELETE':
        response = await axios.delete(`${url}/${path}`);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
