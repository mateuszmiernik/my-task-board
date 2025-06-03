import express from 'express';
import { createBoard, getBoardById } from '../controllers/boardController.js';

const router = express.Router();

router.post('/', createBoard);
router.get('/:id', getBoardById);

export default router;

