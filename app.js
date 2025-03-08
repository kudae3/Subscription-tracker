import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subRouter from './routes/subscription.routes.js';
import connectToDB from './database/mongodb.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription tracker API');
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subRouter)

app.listen(PORT, async() => {
    await connectToDB();
    console.log(`Subscription tracking is listening on http://localhost:${PORT}/`);
})

export default app;