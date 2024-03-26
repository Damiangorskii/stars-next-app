import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface EditStarFormProps {
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

const EditStarForm: React.FC<EditStarFormProps> = ({ star }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        constellation: '',
        magnitude: '',
        distance: '',
        imageUrl: '',
    });

    useEffect(() => {
        if (star) {
            setFormData({
                name: star.name || '',
                type: star.type || '',
                constellation: star.constellation || '',
                magnitude: star.magnitude || '',
                distance: star.distance || '',
                imageUrl: star.imageUrl || '',
            });
        }
    }, [star]);

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
            const updatedStar = { ...formData, id: star.id };
            await axios.put(`/api/update?id=${star.id}`, updatedStar);
            router.push(`/stars/${updatedStar.id}`);
        } catch (error) {
            console.error('Error updating star:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Star</button>
            </form>
        </div>
    );
};

export default EditStarForm;