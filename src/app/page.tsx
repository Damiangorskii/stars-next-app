'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import StarList from '../components/star/StarList';

interface HomeProps {
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

const Home: React.FC<HomeProps> = () => {
  const [stars, setStars] = useState<HomeProps['stars']>([]);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get('/api/read');
        setStars(response.data);
      } catch (error) {
        console.error('Error fetching stars:', error);
      }
    };

    fetchStars();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">List of Stars</h1>
        <StarList stars={stars} />
      </div>
    </Layout>
  );
};

export default Home;