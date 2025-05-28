import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Ładowanie zmiennych z pliku .env
dotenv.config() 

// Stworzenie instancji aplikacji Express
const app = express();

// Połącz się z MongoDB
connectDB();

// Middleware
app.use(cors()); // Umożliwia połączenia z frontendu
app.use(express.json()); // Parsuje body zapytań JSON -> JS object

app.get('/', (req, res) => {
    res.send('Server is running!!!')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});