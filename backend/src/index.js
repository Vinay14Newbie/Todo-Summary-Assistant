import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from '../src/routers/todoRoutes.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/hello', (req, res) => {
  return res.json({ message: "hello there it's Render deployment" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
