import { GoogleAIFileManager } from "@google/generative-ai/server";
import fs from 'fs';
import path from "path";
import { model } from "../api/GenerativeApi/GoogleGenApi";
import { ResponseModel } from "../model/ResponseModel";

class GoogleGenAiService {

    async getApiResponse(image: Express.Multer.File): Promise<ResponseModel<unknown>> {
        const fileManager = new GoogleAIFileManager(model.apiKey);

        if (!image) {
            throw new Error('FILE_NOT_FOUND')
        }

        console.log(image.buffer)

        const imageBuffered = image.buffer
        const tempFile = path.join('tempImage.jpeg')

        try {
            fs.writeFileSync(tempFile, imageBuffered);

            const uploadResponse = await fileManager.uploadFile(tempFile, {
                mimeType: image.mimetype,
                displayName: 'Imagem'
            });

            fs.unlinkSync(tempFile);

            const result = await model.generateContent([
                "Return the task list extracted from the image in JSON format with the fields title, description, priority(LOW, MEDIUM, HIGH or VERY_HIGH), status, and dueDate (if available). Respond with JSON only, without comments, code blocks, or additional formatting.",
                {
                    fileData: {
                        fileUri: uploadResponse.file.uri,
                        mimeType: uploadResponse.file.mimeType
                    }
                }
            ]);

            const response = result.response.text().replace(/```json|```/g, '').trim()

            return {
                message: "Success",
                data: JSON.parse(response)
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
}

export default new GoogleGenAiService();