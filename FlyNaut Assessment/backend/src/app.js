import express from 'express';
import { connectToMongoose } from './database/db.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import todoRouter from './routes/todoRouter.js';
import path from 'node:path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({ credentials: true, origin: 'http://127.0.0.1:5173' }));
app.use(express.json());
app.use(cookieParser());

await connectToMongoose();

// register routers
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/todo', todoRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

export default app;
