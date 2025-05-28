import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log('MongoDB error: ', error);
        process.exit(1);  // zatrzymujemy aplikację, jeśli nie uda się połączyć
    }
};

export default connectDB;