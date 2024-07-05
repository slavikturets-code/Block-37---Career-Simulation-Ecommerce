import { Router } from 'express';
import { dbMethods } from '../db/index.js';

const apiRouter = Router();

apiRouter.post('/user', async (req, res, next) => {
    const { FirstName,LastName,Phone,Email,Username,Password,Status } = req.body;

    try {
        const user = await dbMethods.createUser({
            customerId,
            itemId,
        });

        res.status(201).send({
            message: `User created successfully!`,
            sale,
        });
    } catch (e) {
        next(e);
    }
});