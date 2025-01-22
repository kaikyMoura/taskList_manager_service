import { Priority, Status, Task } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { ResponseModel } from '../model/ResponseModel';
import taskRepository from '../repositories/TaskRepository';
import userRepository from '../repositories/UserRepository';

class TaskService {

    async createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<ResponseModel<Omit<Task, 'id' | 'updatedAt'>>> {
        try {
            if (!task.title || !task.dueDate || !task.priority || !task.status || !task.userId) {
                throw new Error("REQUIRED_PROPERTIES_MISSING")
            }

            const data = await taskRepository.create({
                id: uuidv4(),
                title: task.title,
                description: task.description,
                priority: task.priority as Priority,
                status: task.status as Status,
                dueDate: task.dueDate,
                userId: task.userId
            })

            return {
                message: "Task created with success",
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

    async findAllUserTasks(userId: string): Promise<ResponseModel<Omit<Task[], 'id' | 'updatedAt' | 'userId'>>> {
        try {

            if (!await userRepository.findUnique(userId)) {
                throw new Error("USER_NOT_FOUND")
            }

            const response = await taskRepository.findAllUserTasks(userId)

            if (!response) {
                throw new Error("NOT_FOUND")
            }

            return {
                data: response
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

    async deleteTask(id: string): Promise<ResponseModel<string>> {
        try {

            if (!await taskRepository.findUnique(id)) {
                throw new Error("NOT_FOUND")
            }

            await taskRepository.remove(id)

            return {
                message: "Task deleted with success."
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

    async updateTask(id: string, task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) {
        try {

            if (!await taskRepository.findUnique(id)) {
                throw new Error("NOT_FOUND")
            }

            const response = await taskRepository.update(id, task)

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
export default new TaskService()