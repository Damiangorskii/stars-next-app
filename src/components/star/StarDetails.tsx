import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface StarDetailsProps {
  star: {
    id: number;
    name: string;
    type: string;
    constellation: string;
    magnitude?: number;
    distance?: number;
    imageUrl?: string;
  };
  onDelete: (id: number) => void;
}

const StarDetails: React.FC<StarDetailsProps> = ({ star, onDelete }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this star?')) {
      try {
        await axios.delete(`/api/delete?id=${star.id}`);
        router.push('/');
      } catch (error) {
        console.error('Error deleting star:', error);
      }
    }
  };

  const handleEdit = () => {
    router.push(`/edit-star/${star.id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-2xl font-bold text-center">{star.name}</h1>
      <p className="text-lg text-center">Type: {star.type}</p>
      <p className="text-lg text-center">Constellation: {star.constellation}</p>
      {star.magnitude && <p className="text-lg text-center">Magnitude: {star.magnitude}</p>}
      {star.distance && <p className="text-lg text-center">Distance: {star.distance} light years</p>}
      {star.imageUrl && <img src={star.imageUrl} alt={star.name} className="max-w-xs mt-4" />}

      <div className="mt-4">
        <button onClick={handleEdit} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default StarDetails;
