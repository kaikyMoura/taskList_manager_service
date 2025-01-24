import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';
import taskRoutes from './routes/TaskRoutes';
import userRoutes from './routes/UserRoutes';
import * as dotenv from 'dotenv';

const app = express();

const environment = process.env.NODE_ENV || 'dev'

console.log(`Environment: ${environment}`);

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the TaskList Service. See the documentation and learn how to use the endpoints")
});

app.use(userRoutes)
app.use(taskRoutes)

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

export default app;