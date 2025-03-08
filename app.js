import express from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subRouter from './routes/subscription.routes.js';
import connectToDB from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Subscription tracker API');
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subRouter)

// Error handling middleware (global error handler)
app.use(errorMiddleware);

// Start the server
app.listen(PORT, async() => {
    await connectToDB();
    console.log(`Subscription tracking is listening on http://localhost:${PORT}/`);
})

export default app;