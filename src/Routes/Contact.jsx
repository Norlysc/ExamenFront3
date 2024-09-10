// src/Routes/Contact.jsx
import Form from '../Components/Form';
import { useAppContext } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useAppContext(); // Obtener el contexto global
  const { theme } = state; // Obtener el tema actual desde el contexto

  return (
    <main className={theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'}>
      <h2 className="text-2xl font-bold mb-6 ml-8 mt-9">Want to know more?</h2>
      <p className="mb-8 ml-8">Send us your questions and we will contact you</p>
      <Form />
    </main>
  );
};

export default Contact;
