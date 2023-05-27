import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import JadwalRoute from './routes/JadwalRoute.js';
dotenv.config();

const port = process.env.APP_PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', JadwalRoute);

app.get('/', (req, res) => {
  res.json({
    message: 'Selamat Datang Di API Jadwal',
  });
});

app.listen(Number(port), () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
