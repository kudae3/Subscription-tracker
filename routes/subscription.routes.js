import { Router } from "express";

const subRouter = Router();

subRouter.get('/', (req, res) => res.send({title: 'Get all subscriptions'}));

subRouter.get('/:id', (req, res) => res.send({title: 'Get subscription details'}));

subRouter.post('/', (req, res) => res.send({title: 'Create new subscription'}));

subRouter.put('/:id', (req, res) => res.send({title: 'Update a subscription'}));

subRouter.delete('/:id', (req, res) => res.send({title: 'Delete a subscription'}));

subRouter.get('/user/:id', (req, res) => res.send({title: 'Get all subscriptions of a user'}));

subRouter.put('/:id/cancel', (req, res) => res.send({title: 'Cancel a subscription by a user'}));

subRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get all upcoming renewals'}));

export default subRouter;