import cors from 'cors';
import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from '../src/routers/todoRoutes.js';

const app = express();

const PORT = 3000;

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/hello', (req, res) => {
  return res.json({ message: 'Hello there!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
