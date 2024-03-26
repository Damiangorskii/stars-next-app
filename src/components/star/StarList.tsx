import React from 'react';
import StarCard from './StarCard';

interface StarListProps {
  stars: {
    id: number;
    name: string;
    type: string;
    constellation: string;
    magnitude?: number;
    distance?: number;
    imageUrl?: string;
  }[];
  onDelete: (id: number) => void;
}

const StarList: React.FC<StarListProps> = ({ stars, onDelete }) => {
  return (
    <div>
      {stars && stars.map(star => (
        <StarCard key={star.id} star={star} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default StarList;
