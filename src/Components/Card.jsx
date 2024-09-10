import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ name, username, id, image }) => {
  const [isFav, setIsFav] = useState(false);

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
    <div className="card bg-white p-4 shadow-lg rounded-lg">
      {image && (
        <img src={image} alt={name} className="w-full h-32 object-cover rounded-t-lg mb-4" />
      )}
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{username}</p>
      <Link to={`/dentist/${id}`} className="text-blue-500 hover:underline">Ver detalles</Link>
      
      {/* Estrella de favoritos */}
      <div 
        className={`flex items-center mt-2 cursor-pointer ${isFav ? 'text-yellow-500' : 'text-gray-400'}`} 
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
