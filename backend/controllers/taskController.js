import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    const { boardId, name, description, icon, status } = req.body;

    const newTask = new Task({
        boardId,
        name,
        description, 
        icon, 
        status
    });

    
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, icon, status } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { name, description, icon, status },
            {new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedTask);
    } catch(error) {
        console.error('Error updating task', error);
        res.status(500).json({ message: 'Server error while updating task' });
    }
}