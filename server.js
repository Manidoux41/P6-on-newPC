import express from 'express';
import cors from 'cors';
import './config/db.js';
import './auth/auth.js';
import userRouter from './routes/userRouter.js';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/auth', userRouter);


const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`Listening on port: ${port}`));