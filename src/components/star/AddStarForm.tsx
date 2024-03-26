'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddStarForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        constellation: '',
        magnitude: '',
        distance: '',
        imageUrl: '',
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/create', formData);
            const newStarId = response.data.id;
            setFormData({
                name: '',
                type: '',
                constellation: '',
                magnitude: '',
                distance: '',
                imageUrl: '',
            });

            router.push(`/stars/${newStarId}`);
        } catch (error) {
            console.error('Error adding star:', error);
            alert('Error adding star. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 m-4">
            <h2 className="text-xl font-bold mb-4">Add New Star</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
                    <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                    <label htmlFor="constellation" className="block text-sm font-medium text-gray-700">Constellation:</label>
                    <input type="text" id="constellation" name="constellation" value={formData.constellation} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                    <label htmlFor="magnitude" className="block text-sm font-medium text-gray-700">Magnitude:</label>
                    <input type="text" id="magnitude" name="magnitude" value={formData.magnitude} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                    <label htmlFor="distance" className="block text-sm font-medium text-gray-700">Distance:</label>
                    <input type="text" id="distance" name="distance" value={formData.distance} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
                <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                </div>
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Star</button>
        </form>
    );
};

export default AddStarForm;
