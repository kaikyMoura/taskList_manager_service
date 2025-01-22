var jwt = require('jsonwebtoken');
import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });

    jwt.verify(token, process.env.JWT_SECRET, (err: Error, user: User) => {
        if (err) return res.status(403).json({ message: 'Token inválido.' });
        req.body = user;
        next();
    });
}