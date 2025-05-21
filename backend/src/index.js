import express from 'express';
import connectDB from './config/dbConfig.js';

const app = express();

const PORT = 3000;

app.get('/hello', (req, res) => {
  return res.json({ message: "hello there it's Render deployment" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
