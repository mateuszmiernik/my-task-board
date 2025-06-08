import express from 'express';
import { createBoard, getBoardById, updateBoard } from '../controllers/boardController.js';

const router = express.Router();

router.post('/', createBoard);
router.get('/:id', getBoardById);
router.put('/:id', updateBoard);

export default router;