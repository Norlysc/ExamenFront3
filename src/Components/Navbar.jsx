import { Link } from 'react-router-dom';
import { useAppContext } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`flex justify-between items-center p-4 w-full shadow-lg ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center space-x-2">
        <span className={`text-2xl ml-10 ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <span className={`text-red-600`}>D</span>H Odonto
        </span>
      </div>

      <div className="flex items-center space-x-4 mr-10">
        <Link to="/" className={`hover:text-gray-600 ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}>Home</Link>
        <Link to="/contact" className={`hover:text-gray-600 ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact</Link>
        <Link to="/favs" className={`hover:text-gray-600 ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}>Favs</Link>
        <button onClick={toggleTheme} className={`text-xl ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {state.theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
