import Board from '../models/Board.js';
import Task from '../models/Task.js';
import defaultTasks from '../data/defaultTasks.js';

export const createBoard = async (req, res) => {
    try {
        const { name, description } = req.body || {};
        
        const board = new Board ({
            name: name,
            description: description,
            tasks: []
        });

        const savedBoard = await board.save();

        const tasksToCreate = defaultTasks.map(t => ({...t, boardId: savedBoard._id}));

        try {
            const createdTasks = await Task.insertMany(tasksToCreate, { ordered: false });

            savedBoard.tasks = createdTasks.map(t => t._id);
            await savedBoard.save();
        } catch (insertErr) {
            console.error('Error while creating default tasks for board:', insertErr);
        }

        const boardWithTasks = await Board.findById(savedBoard._id).populate('tasks');
        res.status(201).json(boardWithTasks);
    } catch (error) {
        console.error('Error creating board', error);
        res.status(500).json({ message: 'Server error while creating board.' });
    }
};

export const getBoardById = async (req, res) => {
    try {
        const { id } = req.params;

        const board = await Board.findById(id).populate('tasks');

        if (!board) {
            return res.status(404).json({ message: 'Board cannot be find'});
        }

        res.json(board);
    } catch (error) {
        console.error('Error fetching board', error);
        res.status(500).json( {message: 'Server error while fetching board.' });
    }
};

export const updateBoard = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const updatedBoard = await Board.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );

        if (!updatedBoard) {
            return res.status(404).json({ message: 'Board not found' });
        }

        res.status(200).json(updatedBoard);
    } catch (error) {
        console.error('Error updating board', error);
        res.status(500).json({ message: 'Server error while updating board.' });
    }
};

export const deleteBoard = async (req, res) => {
    try {
        const { id } = req.params;

    const deletedBoard = await Board.findByIdAndDelete(id);

    if (!deletedBoard) {
        return res.status(404).json({ message: 'Board not found' });
    }

    res.status(200).json({ message: 'Board deleted successfully' });
    } catch (error) {
        console.error('Error deleting board', error);
        res.status(500).json({ message: 'Server error while deleting board.' });
    }
};