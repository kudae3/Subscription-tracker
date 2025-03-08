import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({Title: 'GET all users'}))

userRouter.get('/:id', (req, res) => res.send({Title: 'GET user details'}))

userRouter.post('/', (req, res) => res.send({Title: 'Create new user'}))

userRouter.put('/:id', (req, res) => res.send({Title: 'Update user'}))

userRouter.delete('/:id', (req, res) => res.send({Title: 'Delete user'}))

export default userRouter;
