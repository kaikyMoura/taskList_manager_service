import { Request, Response } from "express";
import { catchErrorResponse } from "../exception/CatchErrorResponse";
import taskService from "../services/TaskService";

class TaskController {

    async create(req: Request, res: Response) {
        const task = req.body

        try {
            const result = await taskService.createTask(task)
            return res.status(200).json(result)
        }
        catch (err) {
            if (err === "REQUIRED_PROPERTIES_MISSING") {
                throw catchErrorResponse(res, 400, "REQUIRED_PROPERTIES_MISSING", "Missing requiried properties", "Some required properties are missing from the request.")
            }
            else {
                throw catchErrorResponse(res, 500, "INTERNAL_SERVER_ERROR", "Internal server error",
                    "An error occurred while processing the operation. Please try again or contact support if the issue persists.")
            }
        }
    }

    async findAllUserTasks(req: Request, res: Response) {
        const { user_id } = req.params

        if (user_id === undefined) {
            throw catchErrorResponse(res, 500, "REFUSED", "Id undefined", "No id was passed in the request")
        }

        try {
            const result = await taskService.findAllUserTasks(user_id)
            return res.status(200).json(result)
        }
        catch (err) {
            if (err === "USER_NOT_FOUND") {
                throw catchErrorResponse(res, 404, "NOT_FOUND", "User not found", "User not found with this id")
            }
            else if (err === "NOT_FOUND") {
                throw catchErrorResponse(res, 404, "NOT_FOUND", "No task found", "No tasks created by this user")
            }
            else {
                throw catchErrorResponse(res, 500, "INTERNAL_SERVER_ERROR", "Internal server error",
                    "An error occurred while processing the operation. Please try again or contact support if the issue persists.")
            }
        }
    }

    async deleteTask(req: Request, res: Response) {
        const { id } = req.params
        try {
            const result = await taskService.deleteTask(id)
            return res.status(200).json(result)
        }
        catch (err) {
            if (err === "NOT_FOUND") {
                throw catchErrorResponse(res, 404, "NOT_FOUND", "No task found", "No tasks created by this user")
            }
            else {
                throw catchErrorResponse(res, 500, "INTERNAL_SERVER_ERROR", "Internal server error",
                    "An error occurred while processing the operation. Please try again or contact support if the issue persists.")
            }
        }
    }

    async updateTask(req: Request, res: Response) {
        const { id } = req.params
        const task = req.body

        try {
            const result = await taskService.updateTask(id, task)
            return res.status(200).json(result)
        }
        catch (err) {
            if (err === "NOT_FOUND") {
                throw catchErrorResponse(res, 404, "NOT_FOUND", "No task found", "No tasks created by this user")
            }
            else {
                throw catchErrorResponse(res, 500, "INTERNAL_SERVER_ERROR", "Internal server error",
                    "An error occurred while processing the operation. Please try again or contact support if the issue persists.")
            }
        }
    }

}

export default new TaskController()