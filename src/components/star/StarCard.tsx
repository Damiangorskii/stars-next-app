import React from 'react';

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
}

const StarCard: React.FC<StarCardProps> = ({ star }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2">
      <h3 className="text-xl font-bold">{star.name}</h3>
      <p>Type: {star.type}</p>
      <p>Constellation: {star.constellation}</p>
      {star.magnitude && <p>Magnitude: {star.magnitude}</p>}
      {star.distance && <p>Distance: {star.distance} light years</p>}
      {star.imageUrl && (
        <div className="mt-3">
          <img src={star.imageUrl} alt={star.name} className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default StarCard;
