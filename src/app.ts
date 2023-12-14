import express from 'express';
import cors from 'cors';
import cityRoutes from './routes/cityRoutes';

const app = express();
const port = 3001;

app.use(cors());
app.use('/api', cityRoutes);

export default app;
