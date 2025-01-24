import { Request, Response, Router } from 'express';
import taskController from '../controllers/TaskController';
import multer from 'multer';
import authenticateToken from '../middlewares/auth';

const taskRoutes = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });

taskRoutes.post('/task/create', authenticateToken, (req: Request, res: Response) => {
    taskController.create(req, res)
});
taskRoutes.delete('/task/delete/:task_id', authenticateToken, (req: Request, res: Response) => {
    taskController.deleteTask(req, res)
});
taskRoutes.put('/task/update/:task_id', authenticateToken, (req: Request, res: Response) => {
    taskController.updateTask(req, res)
});
taskRoutes.get('/task/list/:user_id', authenticateToken, (req: Request, res: Response) => {
    taskController.findAllUserTasks(req, res)
});
taskRoutes.post('/task/load', upload.single('file'), authenticateToken, (req: Request, res: Response) => {
    taskController.getTasksDataFromImage(req, res)
});

export default taskRoutes;