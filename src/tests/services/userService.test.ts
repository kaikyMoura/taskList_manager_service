jest.useRealTimers()

import { PrismaClient } from "@prisma/client";

import { config } from "dotenv";
import userService from '../../services/UserService';

const prisma = new PrismaClient();

config({ path: '.env.test' })


describe('Testing user service operations', () => {
    beforeEach(async () => {
        try {
            await prisma.user.deleteMany();
            console.log('Usuários excluídos');
        } catch (error) {
            console.error('Erro connecting to database: ' + error);
        }
    });

    afterAll(async () => {
        await prisma.$disconnect()
    })

    test('POST /user/create, should create a new user and return a json', async () => {
        const newUser = {
            userName: "JoaoGrilo123",
            email: "testt@gmail.com",
        }
        const response = await userService.createUser(newUser);

        expect(response.message).toBe("User created successfully")
        expect(response.data).toHaveProperty('id')
        expect(response.data?.userName).toBe(newUser.userName);
        expect(response.data?.email).toBe(newUser.email);
    })
});