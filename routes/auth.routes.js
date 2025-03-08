import { Router } from "express"

const authRouter = Router();

authRouter.get('/sign-up', (req, res) => res.send({Title: 'Sign Up'}))
authRouter.get('/sign-in', (req, res) => res.send({Title: 'Sign In'}))
authRouter.get('/sign-out', (req, res) => res.send({Title: 'Sign Out'}))

export default authRouter;