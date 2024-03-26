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
        alert('Failed to delete the star. Please try again.');
      }
    }
  };

  const handleEdit = () => {
    router.push(`/edit-star/${star.id}`);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{star.name}</h3>
        <div>
          <button onClick={handleEdit} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
        </div>
      </div>
      <p>Type: {star.type}</p>
      <p>Constellation: {star.constellation}</p>
      {star.magnitude && <p>Magnitude: {star.magnitude}</p>}
      {star.distance && <p>Distance: {star.distance} light years</p>}
      {star.imageUrl && (
        <div className="mt-3">
          <img src={star.imageUrl} alt={star.name} className="max-w-full h-auto rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default StarCard;
