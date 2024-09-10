import { Link } from 'react-router-dom';
import { useAppContext } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`flex justify-between p-4 w-full shadow-lg ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex space-x-4">
        <Link
          to="/"
          className={`text-lg ${state.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={`text-lg ${state.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
        >
          Contact
        </Link>
        <Link
          to="/favs"
          className={`text-lg ${state.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}
        >
          Favs
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className={`text-xl ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        {state.theme === 'dark' ? '🌙' : '☀️'} {/* Ajusta el icono según el tema */}
      </button>
    </nav>
  );
};

export default Navbar;
