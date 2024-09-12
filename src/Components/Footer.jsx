import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAppContext } from '../Components/utils/global.context'; // Asegúrate de importar correctamente el contexto

const Footer = () => {
  const { state } = useAppContext(); // Accede al estado global
  const { theme } = state;

  return (
    <>
      {/* Sección superior del footer */}
      <footer className={`w-full ${theme === 'dark' ? 'bg-gray-800 text-white pt-px' : 'bg-gray-100 text-black'}`}>
        <div className="bg-red-700 text-white py-4 px-4 flex justify-center items-center w-lvw h-max m-0">
          <p className="mr-2">VOTA</p>
          <img 
            src="/images/DH.ico"
            alt="DH-logo" 
            className="w-6 h-6"
          />
        </div>
      </footer>

      {/* Contenedor para DIGITALHOUSE y redes sociales */}
      <div className={`flex flex-col items-center py-7 mb-3 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
       
        <img 
          src="/images/DH.png" 
          alt="DH-logo" 
          className="w-25 h-14" // Puedes ajustar el tamaño según sea necesario
        />

        {/* Íconos de redes sociales */}
        <div className="flex space-x-4 ">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-facebook text-2xl hover:text-gray-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-instagram text-2xl hover:text-gray-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}></i>
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-whatsapp text-2xl hover:text-gray-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-tiktok text-2xl hover:text-gray-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
