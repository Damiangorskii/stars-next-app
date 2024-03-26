'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import StarDetails from '../../../components/star/StarDetails';
import Layout from '@/components/Layout';

interface Star {
  id: number;
  name: string;
  type: string;
  constellation: string;
  magnitude?: number;
  distance?: number;
  imageUrl?: string;
}

const StarPage: React.FC = () => {
  const [star, setStar] = useState<Star | null>(null);
  const params = useParams();
  const starId = params.starId;

  useEffect(() => {
    if (!starId) return;

    const fetchStar = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/read?starId=${starId}`);
        setStar(res.data);
      } catch (error) {
        console.error('Error fetching star:', error);
      }
    };

    fetchStar();
  }, [starId]);

  if (!star) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id: number) => {

  };

  return (
    <div>
      <Layout>
        <StarDetails star={star} onDelete={handleDelete} />
      </Layout>
    </div>
  );
};

export default StarPage;