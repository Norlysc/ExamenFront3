// src/Routes/Home.jsx

import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import { useAppContext } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    // Llamada a la API para obtener la lista de dentistas
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Asegúrate de que solo guardamos los primeros 8 dentistas
        const limitedDentists = response.data.slice(0, 8); // Tomar solo 8
        dispatch({ type: 'SET_DENTISTS', payload: limitedDentists });
      })
      .catch(error => console.error('Error fetching dentists:', error));
  }, [dispatch]);

  // Función para agregar a favoritos y guardarlo en localStorage
  const handleAddFav = (dentist) => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!favs.some(fav => fav.id === dentist.id)) {
      favs.push(dentist);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  };

  return (
    <main className={`home mt-10 mx-11 ${state.theme === 'dark' ? 'bg-dark text-white' : 'bg-lightGray text-black'} py-8`}>
      <h1 className="text-3xl font-bold text-center mb-8">HOME</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-10 ml-20 p-10 ">
        {state.dentists.map(dentist => (
          <Card
            key={dentist.id}
            dentist={dentist}
            username={dentist.username}
            id={dentist.id}
            image={`/images/Doc.jpeg`}
            onAddFav={handleAddFav}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
