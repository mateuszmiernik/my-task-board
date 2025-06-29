export const createBoard = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/boards`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'My Task Board',
                description: 'Tasks to keep organised',
                tasks: []
            })
        }
    )

    if (!response.ok) throw new Error('Error creating new Board');

    const data = await response.json();
    return data;
    } catch (error) {
        console.error('Error while creating new Board', error);
        throw error;
    }
};

export const getBoardById = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/boards/${id}`);

    if (!response.ok) throw new Error('Failed to fetch a board.');

    return await response.json();
};

export const updateBoard = async (id, board) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/boards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(board)
    });

    if (!response.ok) {
        throw new Error('Failed to update board');
    }

    return await response.json();

    } catch (error) {
        console.error('Error while updating board:', error);
        throw error;
    }
};