import { config } from 'dotenv';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import taskRoutes from './routes/TaskRoutes';
import userRoutes from './routes/UserRoutes';
import multer from 'multer';

const app = express();

const environment = process.env.NODE_ENV || 'dev'

console.log(`Environment: ${environment}`);
config({ path: `.env.${environment}` })

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes)
app.use(taskRoutes)

export default app;