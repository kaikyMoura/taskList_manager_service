import { Router } from 'express';
import taskController from '../controllers/TaskController';

const taskRoutes = Router()

taskRoutes.post('/task/create', taskController.create);
taskRoutes.delete('/task/delete/:task_id', taskController.deleteTask);
taskRoutes.put('/task/update/:task_id', taskController.updateTask);
taskRoutes.get('/task/list/:user_id', taskController.findAllUserTasks);

export default taskRoutes;