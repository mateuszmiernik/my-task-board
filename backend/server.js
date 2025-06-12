import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import boardRoutes from './routes/boardRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

// Load environment variables from .env file
dotenv.config() 

// Create Express app instance
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Umożliwia połączenia z frontendu
app.use(express.json()); // Parsuje body zapytań JSON -> JS object

// Main route for boards
app.use('/api/boards', boardRoutes);

// Main route for tasks
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});