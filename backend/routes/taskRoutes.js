import express from 'express';
import { createTask, getTaskById, updateTask, deleteTask, getTaskByBoardId } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/', getTaskByBoardId);

export default router;