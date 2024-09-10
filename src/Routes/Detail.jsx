import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useAppContext();

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  if (!dentist) return <p className="text-center">Loading...</p>;

  return (
    <div className={`detail border border-gray-400 rounded-md overflow-hidden shadow-md mb-9  w-full mt-48 ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-4`}>
      <h1 className="text-2xl font-bold mb-8 mt-5">Detalles del Dentista</h1>
      {/* Estructura de tabla con bordes */}
      <div className="table w-full border-collapse border border-gray-400 ">
        {/* Fila de títulos */}
        <div className="table-row bg-stone-500  text-xl  ">
          <div className="table-cell border border-gray-400 p-2 font-semibold">Name</div>
          <div className="table-cell border border-gray-400 p-2 font-semibold">Email</div>
          <div className="table-cell border border-gray-400 p-2 font-semibold">Phone</div>
          <div className="table-cell border border-gray-400 p-2 font-semibold">Website</div>
        </div>
        
        {/* Fila con los datos del dentista */}
        <div className="table-row text-xl ">
          <div className="table-cell border border-gray-400 p-2">{dentist.name}</div>
          <div className="table-cell border border-gray-400 p-2">{dentist.email}</div>
          <div className="table-cell border border-gray-400 p-2">{dentist.phone}</div>
          <div className="table-cell border border-gray-400 p-2">
            <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {dentist.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Detail;
