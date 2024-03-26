import React from 'react';

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
}

const StarDetails: React.FC<StarDetailsProps> = ({ star }) => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-2xl font-bold text-center">{star.name}</h1>
      <p className="text-lg text-center">Type: {star.type}</p>
      <p className="text-lg text-center">Constellation: {star.constellation}</p>
      {star.magnitude && <p className="text-lg text-center">Magnitude: {star.magnitude}</p>}
      {star.distance && <p className="text-lg text-center">Distance: {star.distance} light years</p>}
      {star.imageUrl && <img src={star.imageUrl} alt={star.name} className="max-w-xs mt-4" />}
    </div>
  );
};

export default StarDetails;