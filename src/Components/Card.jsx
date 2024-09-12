import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAppContext } from '../Components/utils/global.context'; // Importa el contexto

const Card = ({ name, username, id, image }) => {
  const [isFav, setIsFav] = useState(false);
  const { state } = useAppContext(); // Accede al estado global
  const { theme } = state; // Obtén el tema actual

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isFavAlready = favs.some(fav => fav.id === id);
    setIsFav(isFavAlready);
  }, [id]);

  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isAlreadyFav = favs.some(fav => fav.id === id);

    if (!isAlreadyFav) {
      // Agregar a favoritos
      favs = [...favs, { name, username, id, image }];
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFav(true);
    } else {
      // Quitar de favoritos
      favs = favs.filter(fav => fav.id !== id);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFav(false);
    }
  };

  return (
    <div className={`card bg-#c6b3b3 p-4 shadow-lg rounded-s-lg ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-#969090 text-black'}`}>
      <img 
        src="/images/doctor.jpg" 
        alt="Doctor" 
        className="w-full h-32 object-cover mb-4" 
      />
      <h2 className="text-xl font-bold mt-3">{name}</h2>
      <p className="text-gray-600">{username}</p>
      <Link 
        to={`/dentist/${id}`} 
        className={`mt-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} hover:underline`}
        style={{ color: theme === 'dark' ? '#1E40AF' : '#3B82F6' }} // Asegura el color del enlace
      >
        Ver detalles
      </Link>
      
      {/* Estrella de favoritos */}
      <div 
        className={`flex items-center mt-5 cursor-pointer ${isFav ? 'text-yellow-500' : 'text-gray-400'}`} 
        onClick={toggleFav}
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <FaStar className="w-6 h-6" />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default Card;
