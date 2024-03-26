import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface StarCardProps {
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

const StarCard: React.FC<StarCardProps> = ({ star, onDelete }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this star?')) {
      try {
        await axios.delete(`/api/delete?id=${star.id}`);
        onDelete(star.id);
      } catch (error) {
        console.error('Error deleting star:', error);
      }
    }
  };

  const handleEdit = () => {
    router.push(`/edit-star/${star.id}`);
  };

  return (
    <div className="max-w-screen-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white mt-5">
      <div className="px-6 py-4">
        <div className="text-gray-700 font-bold text-xl mb-2">
          <a href={`/stars/${star.id}`}>{star.name}</a>
        </div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Type:</span> {star.type}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Constellation:</span> {star.constellation}
        </p>
        {star.magnitude && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold">Magnitude:</span> {star.magnitude}
          </p>
        )}
        {star.distance && (
          <p className="text-gray-700 text-base">
            <span className="font-semibold">Distance:</span> {star.distance} light years
          </p>
        )}
      </div>
      {star.imageUrl && (
        <div className="w-full overflow-hidden">
          <img className="w-full h-auto object-cover" src={star.imageUrl} alt={star.name} />
        </div>
      )}
      <div className="px-6 py-4">
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StarCard;
