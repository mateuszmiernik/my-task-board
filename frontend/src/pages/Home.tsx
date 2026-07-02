import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBoard } from '../api/BoardApi.ts';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        let cancelled = false;

        const handleCreate = async () => {
            try {
                const board = await createBoard();
                if (cancelled) return;

                navigate(`/board/${board._id}`, {
                    state: {initialBoard: board}
                });
            } catch (error) {
                console.error('Failed to create board:', error);
            }
        };

        handleCreate();

        return () => { cancelled: true }
    }, [navigate]);

    return (
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    )
}

export default Home;