import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    try {
        const { boardId, name, description, icon, status } = req.body;

        const newTask = new Task({
        boardId,
        name,
        description, 
        icon, 
        status
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Server error while creating task.' });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Server error while fetching task.' });
    }
};

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
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully', deletedTask });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Error while deleting task' })
    }
};

export const getTaskByBoardId = async (req, res) => {
    try {
        const { boardId } = req.query;
        if (!boardId) {
            return res.status(404).json({ message: 'boardId is required' });
        }
        const tasks = await Task.find({ boardId });
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error while fetching tasks.' });
    }
};