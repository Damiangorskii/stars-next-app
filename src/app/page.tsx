import React from 'react';
import Layout from '../components/Layout';

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

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">List of Stars</h1>
      </div>
    </Layout>
  );
};

export default Home;