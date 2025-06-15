import express from 'express';
import { createTask, getTaskById, updateTas, deleteTask } from '../controllers/taskController';

const router = express.router();

router.post('/', createTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;