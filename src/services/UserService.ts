import { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { ResponseModel } from '../model/ResponseModel';
import userRepository from "../repositories/UserRepository";
import { compare, hash } from 'bcryptjs';

class UserService {

    async retrieveUserByCredentials(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'tasks'>): Promise<ResponseModel<Omit<User, 'id' | 'updatedAt' | 'createdAt'>>> {
        try {
            if (!user || !user.email || !user.user_password) {
                throw new Error("REQUIRED_PROPERTIES_MISSING")
            }

            const retrivedUser = await userRepository.findUniqueByEmail(user.email)

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) || retrivedUser.email != user.email || !await compare(user.user_password, retrivedUser.user_password)) {
                throw new Error("INVALID_CREDENTIALS");
            }

            const data = await userRepository.findUniqueByCredentials({
                user_name: user.user_name,
                email: user.email,
                user_password: user.user_password
            })

            if (!user) {
                throw new Error("USER_NOT_FOUND")
            }

            return {
                data: data
            }
        }
        catch (err) {
            console.error(err)
            if (err instanceof Error) {
                throw new Error(err.message)
            }
            else {
                throw new Error("INTERNAL_SERVER_ERROR")
            }
        }
    }

    async createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'tasks'>): Promise<ResponseModel<Omit<User, 'id' | 'user_password' | 'createdAt' | 'updatedAt' | 'tasks'>>> {
        const saltRounds = 10;
        try {

            if (!user.user_name || !user.email) {
                throw new Error("REQUIRED_PROPERTIES_MISSING")
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
                throw new Error("INVALID_CREDENTIALS");
            }

            await userRepository.create({
                id: uuidv4(),
                user_name: user.user_name,
                email: user.email,
                user_password: await hash(user.user_password, saltRounds)
            })
            return {
                message: "User created successfully",
                data: {
                    user_name: user.user_name,
                    email: user.email
                }
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