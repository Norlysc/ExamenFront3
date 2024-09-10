// src/Routes/Contact.jsx
import Form from '../Components/Form';
import { useAppContext } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useAppContext(); // Obtener el contexto global
  const { theme } = state; // Obtener el tema actual desde el contexto

  return (
    <main className={theme === 'dark' ? 'bg-dark text-white py-20' : 'bg-light text-black'}>
      <h2 className="text-2xl font-bold mb-5 ml-8 mt-19 py-6">Want to know more?</h2>
      <p className="mb-6 ml-8 ">Send us your questions and we will contact you</p>
      <Form />
    </main>
  );
};

export default Contact;
