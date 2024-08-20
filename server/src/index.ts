import express, { Express } from 'express';
import mongoose from 'mongoose';
import financialRecordRouter from './routes/financial-records';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file in the root directory

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const mongoURI: string = "mongodb+srv://lydiabenzemrane:hV6zlqkjVnK6kXz7@personnelfinancetracker.3dq04js.mongodb.net/?retryWrites=true&w=majority&appName=PersonnelFinanceTracker";
console.log('MongoDB URI:', process.env.MONGO_URI);

mongoose
  .connect(mongoURI)
  .then(() => console.log('CONNECTED TO MONGODB!'))
  .catch((err) => console.error('Failed to Connect to MongoDB:', err));

app.use('/financial-records', financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
