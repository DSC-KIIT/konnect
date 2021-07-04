import { Router } from 'express';
import userRouter from './Users';
import activityRouter from './Activities';
import tagRouter from './Tags';

// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/activities', activityRouter);
baseRouter.use('/tags', tagRouter);
export default baseRouter;
