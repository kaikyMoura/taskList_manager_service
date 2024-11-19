import { Router } from 'express';
import taskController from '../controllers/TaskController';
import multer from 'multer';

const taskRoutes = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });

taskRoutes.post('/task/create', taskController.create);
taskRoutes.delete('/task/delete/:task_id', taskController.deleteTask);
taskRoutes.put('/task/update/:task_id', taskController.updateTask);
taskRoutes.get('/task/list/:user_id', taskController.findAllUserTasks);
taskRoutes.post('/task/load', upload.single('file'), taskController.getTasksDataFromImage);

export default taskRoutes;