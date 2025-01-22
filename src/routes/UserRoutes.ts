import { Router } from "express";
import userController from "../controllers/UserController";
import authenticateToken from "../middlewares/auth";

const userRoutes = Router()

userRoutes.post('/user/create', (req, res) => { userController.createUser(req, res) });
userRoutes.post('/user/login', (req, res) => { userController.createUser(req, res) });
userRoutes.delete('/user/delete/:user_id', (req, res) => {
    authenticateToken
    userController.deleteUser(req, res)
});
userRoutes.put('/user/update/:user_id', (req, res) => {
    authenticateToken
    userController.updateUser(req, res)
});

export default userRoutes;