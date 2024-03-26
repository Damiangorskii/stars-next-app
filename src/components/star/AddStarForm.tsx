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
        <form onSubmit={handleSubmit} className="border border-gray-300 rounded-lg p-4 m-2">
            <h2 className="text-lg font-bold mb-2">Add New Star</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ color: 'black' }} />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} style={{ color: 'black' }} />
                </div>
                <div>
                    <label htmlFor="constellation">Constellation:</label>
                    <input type="text" id="constellation" name="constellation" value={formData.constellation} onChange={handleChange} style={{ color: 'black' }} />
                </div>
                <div>
                    <label htmlFor="magnitude">Magnitude:</label>
                    <input type="text" id="magnitude" name="magnitude" value={formData.magnitude} onChange={handleChange} style={{ color: 'black' }} />
                </div>
                <div>
                    <label htmlFor="distance">Distance:</label>
                    <input type="text" id="distance" name="distance" value={formData.distance} onChange={handleChange} style={{ color: 'black' }} />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} style={{ color: 'black' }} />
                </div>
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Star</button>
        </form>
    );
};

export default AddStarForm;
