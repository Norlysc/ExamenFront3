import Card from "../Components/Card";
import { useAppContext } from "../Components/utils/global.context";
import { useEffect, useState } from "react";

const Favs = () => {
  const { state } = useAppContext(); // Obtener el estado del contexto global
  const { theme } = state; // Obtener el tema actual desde el contexto

  // Estado para almacenar los dentistas favoritos
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    // Obtener los dentistas destacados del localStorage
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(savedFavs);
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <main className={`p-6 max-w-screen-lg mx-auto rounded-lg mt-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">Dentists Favs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Renderizar una Card por cada dentista destacado */}
        {favs.length > 0 ? (
          favs.map((dentist) => (
            <Card 
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              imageUrl={dentist.imageUrl} // Asegúrate de que la URL de la imagen esté disponible
            />
          ))
        ) : (
          <p className="text-center text-lg">No hay dentistas en favoritos.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
