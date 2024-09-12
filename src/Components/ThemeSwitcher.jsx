// src/Components/ThemeSwitcher.jsx

import { useAppContext } from './utils/global.context';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded-md bg-gray-300 dark:bg-gray-700"
    >
      Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
    </button>
  );
};

export default ThemeSwitcher;
