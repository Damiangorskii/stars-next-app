'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import EditStarForm from '../../../components/star/EditStarForm';
import Layout from '@/components/Layout';

const EditStarPage: React.FC = () => {
    const [star, setStar] = useState<Star | null>(null);
    const params = useParams();
    const starId = params.starId;

    useEffect(() => {
        const fetchStar = async () => {
            try {
                const response = await axios.get(`/api/read?starId=${starId}`);
                setStar(response.data);
            } catch (error) {
                console.error('Error fetching star:', error);
            }
        };

        if (starId) {
            fetchStar();
        }
    }, [starId]);

    return (
        <Layout>
            <div>
                {star && <EditStarForm star={star} />}
            </div>
        </Layout>
    );
};

export default EditStarPage;