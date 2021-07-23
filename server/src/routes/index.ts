import { Router } from 'express';
import userRouter from './Users';
import positionRouter from './Positions';
import activityDocRouter from './ActivityDoc';
import activityRouter from './Activity';
import tagRouter from './Tags';

// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/positions', positionRouter);
baseRouter.use('/activitydoc', activityDocRouter);
baseRouter.use('/activity', activityRouter);
baseRouter.use('/tags', tagRouter);
export default baseRouter;
