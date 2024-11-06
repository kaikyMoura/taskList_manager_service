import { Router } from "express";
import userController from "../controllers/UserController";

const userRoutes = Router()

userRoutes.post('/user/create', userController.createUser);
userRoutes.delete('/user/delete/:user_id', userController.deleteUser);
userRoutes.put('/user/update/:user_id', userController.updateUder);

export default userRoutes;