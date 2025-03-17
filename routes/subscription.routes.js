import { Router } from "express";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subRouter = Router();

subRouter.get('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subRouter.get('/:id', authorize, getUserSubscriptions);

subRouter.post('/', authorize, createSubscription);

subRouter.put('/:id', (req, res) => res.send({title: 'Update a subscription'}));

subRouter.delete('/:id', (req, res) => res.send({title: 'Delete a subscription'}));

subRouter.get('/user/:id', (req, res) => res.send({title: 'Get all subscriptions of a user'}));

subRouter.put('/:id/cancel', (req, res) => res.send({title: 'Cancel a subscription by a user'}));

subRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get all upcoming renewals'}));

export default subRouter;