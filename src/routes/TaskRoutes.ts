import { Request, Response, Router } from 'express';
import taskController from '../controllers/TaskController';
import multer from 'multer';

const taskRoutes = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });

taskRoutes.post('/task/create', (req: Request, res: Response) => { taskController.create(req, res) });
taskRoutes.delete('/task/delete/:task_id', (req: Request, res: Response) => { taskController.deleteTask(req, res) });
taskRoutes.put('/task/update/:task_id', (req: Request, res: Response) => { taskController.updateTask(req, res) });
taskRoutes.get('/task/list/:user_id', (req: Request, res: Response) => { taskController.findAllUserTasks(req, res) });
taskRoutes.post('/task/load', upload.single('file'), (req: Request, res: Response) => { taskController.getTasksDataFromImage(req, res) });

export default taskRoutes;