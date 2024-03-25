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
}

const StarList: React.FC<StarListProps> = ({ stars }) => {
  return (
    <div>
      {stars && stars.map(star => (
        <StarCard key={star.id} star={star} />
      ))}
    </div>
  );
};

export default StarList;
