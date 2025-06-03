import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import boardRoutes from './routes/boardRoutes.js';

// Ładowanie zmiennych z pliku .env
dotenv.config() 

// Stworzenie instancji aplikacji Express
const app = express();

// Połącz się z MongoDB
connectDB();

// Middleware
app.use(cors()); // Umożliwia połączenia z frontendu
app.use(express.json()); // Parsuje body zapytań JSON -> JS object

// Główna trasa dla boards
app.use('/api/boards', boardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});