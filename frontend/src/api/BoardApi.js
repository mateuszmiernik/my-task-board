export const createBoard = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL/boards}`,
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
}