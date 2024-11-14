import { User } from '.prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { ResponseModel } from '../model/ResponseModel';
import userRepository from "../repositories/UserRepository";

class UserService {

    async createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'tasks'>): Promise<ResponseModel<Omit<User, 'id' | 'updatedAt' | 'tasks'>>> {
        try {

            if (!user.userName || !user.email) {
                throw new Error("REQUIRED_PROPERTIES_MISSING")
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
                throw new Error("INVALID_CREDENTIALS");
            }

            const data = await userRepository.create({
                id: uuidv4(),
                userName: user.userName,
                email: user.email
            })
            return {
                message: "User created successfully",
                data: data
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message)
            }
            else {
                throw new Error("INTERNAL_SERVER_ERROR")
            }
        }
    }

    async deleteUser(id: string): Promise<ResponseModel<string>> {
        try {

            if (!await userRepository.findUnique(id)) {
                throw new Error("NOT_FOUND")
            }

            await userRepository.remove(id)

            return {
                message: "User deleted with success."
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message)
            }
            else {
                throw new Error("INTERNAL_SERVER_ERROR")
            }
        }
    }

    async updateUser(id: string, user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
        try {

            if (!await userRepository.findUnique(id)) {
                throw new Error("NOT_FOUND")
            }

            const response = await userRepository.update(id, user)

            return {
                message: "Task updated with success.",
                data: response
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message)
            }
            else {
                throw new Error("INTERNAL_SERVER_ERROR")
            }
        }
    }
}

export default new UserService();