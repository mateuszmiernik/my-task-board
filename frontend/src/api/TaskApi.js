export const createTask =  async (task) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(task)
        });
        
        if (!response.ok) throw new Error('Error creating new Task');

        return await response.json();
    } catch (error) {
        console.error('Error while creating new Task', error);
        throw error;
    }
};

export const getTaskByBoardId = async (boardId) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks?boardId=${boardId}`)
        if (!response.ok) throw new Error('Error fetching tasks');
        return await response.json();
    } catch (error) {
        console.error('Error while fetching tasks', error);
        return [];
    }
};