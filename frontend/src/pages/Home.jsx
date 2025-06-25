import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBoard } from '../api/BoardApi';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleCreate = async () => {
            try {
                const board = await createBoard();
                navigate(`/board/${board._id}`);
            } catch (error) {
                console.error('Failed to create board:', error);
            }
        }

        handleCreate();
    }, [navigate]);

    return (
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    )
}

export default Home;