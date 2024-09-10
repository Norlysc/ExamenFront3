import { useState, useEffect } from 'react';
import { useAppContext } from './utils/global.context';

const Form = () => {
  const { state } = useAppContext(); // Obtener el contexto global
  const { theme } = state; // Obtener el tema actual desde el contexto

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({ name: '', email: '' });
  // Estado para manejar mensajes de error y éxito
  const [message, setMessage] = useState('');
  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState({ name: '', email: '' });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Valida el formulario
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    // Validación del nombre
    if (formData.name.length <= 5) {
      newErrors.name = 'El nombre completo debe tener más de 5 caracteres.';
      valid = false;
    }

    // Validación del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Por favor, ingrese un email válido.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setMessage(`Gracias ${formData.name}, te contactaremos cuanto antes vía mail.`);
      // Limpiar el formulario
      setFormData({ name: '', email: '' });
      setErrors({ name: '', email: '' });
    } else {
      setMessage('Por favor, verifique su información nuevamente.');
    }
  };

  // Maneja el temporizador para ocultar el mensaje
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000); // Duración del mensaje en milisegundos (5 segundos)

      // Limpia el temporizador si el componente se desmonta antes de que el tiempo se acabe
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={`p-6 max-w-lg mx-auto rounded-lg h-80 shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-2">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-blue-300' : 'focus:ring-blue-500'}`}
            required
          />
          {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-blue-300' : 'focus:ring-blue-500'}`}
            required
          />
          {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`w-24 py-2 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'} focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-red-300' : 'focus:ring-red-500'}`}
          >
            Enviar
          </button>
        </div>

        {message && (
          <div className={`mt-2 p-4 rounded-lg text-lg ${message.includes('Gracias') ? (theme === 'dark' ? 'bg-green-700 text-white' : 'bg-green-400 text-black') : (theme === 'dark' ? 'bg-red-700 text-white' : 'bg-red-500 text-black')} ${theme === 'dark' ? 'bg-opacity-80' : 'bg-opacity-90'} text-left`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
