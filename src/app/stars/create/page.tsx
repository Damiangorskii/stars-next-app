import React from 'react';
import Layout from "../../../components/Layout"
import AddStarForm from '../../../components/star/AddStarForm';

const Create: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Star</h1>
        <AddStarForm />
      </div>
    </Layout>
  );
};

export default Create;
