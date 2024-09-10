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
    <div className={`detail ${state.theme === 'dark' ? 'bg-dark text-white' : 'bg-lightGray text-black'} p-4`}>
      <h1 className="text-2xl font-bold">HOME</h1>
      <p><strong>Name:</strong> {dentist.name}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${dentist.website}`} className="text-blue-500">{dentist.website}</a></p>
    </div>
  );
};

export default Detail;
