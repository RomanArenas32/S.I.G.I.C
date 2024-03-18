import { useState } from 'react';
import { Logo } from '../utilidades/Logo';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    user: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (

    <div className="grid place-items-center items-center h-full my-32">

      <div className="bg-gray-900 border-4 border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
        <div className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col">


          <Logo estilos={ 'w-24' } />

          <h1 className="text-white text-2xl">Inicia sesion</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
              className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              placeholder="Usuario"
              type="text"
              name="user"
              id="user"
              onChange={handleInputChange} value={formData.user}
            />
            <input
              className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              placeholder="contraseña"
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange} value={formData.password}
            />
            <button
              className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-4 border-gray-700 hover:border-blue-500 transition-all duration-200"
              type="submit"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
