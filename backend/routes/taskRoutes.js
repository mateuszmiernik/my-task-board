import express from 'express';
import { updateTask } from '../controllers/taskController';

const router = express.router();

router.put('/:id', updateTask);

export default router;