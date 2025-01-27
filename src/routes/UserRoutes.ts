import { Router } from "express";
import userController from "../controllers/UserController";
import authenticateToken from "../middlewares/auth";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const userRoutes = Router()

userRoutes.post('/user/create', upload.single('file'), (req, res) => {
    userController.createUser(req, res)
});
userRoutes.post('/user/login', (req, res) => { userController.login(req, res) });
userRoutes.delete('/user/delete/:user_id', authenticateToken, (req, res) => {
    userController.deleteUser(req, res)
});
userRoutes.put('/user/update/:user_id', authenticateToken, (req, res) => {
    userController.updateUser(req, res)
});

export default userRoutes;