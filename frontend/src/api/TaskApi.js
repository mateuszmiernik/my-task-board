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