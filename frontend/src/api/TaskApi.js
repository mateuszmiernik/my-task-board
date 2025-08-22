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

export const updateTask = async (id, data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error ('Error updating task');
        return await response.json();
    } catch (error) {
        console.error('Error while updating task', error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Error deleting task');
        return true;
    } catch (error) {
        console.error('Error while deleting task', error);
        throw error;
    }
};