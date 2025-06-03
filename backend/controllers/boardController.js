import Board from '../models/Board.js';
import Task from '../models/Task.js';

export const createBoard = async (req, res) => {
    try {
        const { name, description, tasks } = req.body;
        
        const board = new Board ({
            name: name,
            description: description,
            tasks: tasks
        });

        const savedBoard = await board.save();

        res.status(201).json(savedBoard);
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