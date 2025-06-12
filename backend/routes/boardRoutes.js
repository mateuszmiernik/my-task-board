import express from 'express';
import { createBoard, getBoardById, updateBoard, deleteBoard } from '../controllers/boardController.js';

const router = express.Router();

router.post('/', createBoard);
router.get('/:id', getBoardById);
router.put('/:id', updateBoard);
router.delete('/:id', deleteBoard);

export default router;