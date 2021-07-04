import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import ActivityDao from '@daos/Activity/ActivityDao';
import { paramMissingError } from '@shared/constants';

const activityDao = new ActivityDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import validateRequests from '@middlewares/validateRequest';
const validateRequest = new validateRequests();

import express from 'express';
let activityRouter = express.Router();

/**
 * Get one activity.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.get('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    const activity = await activityDao.getOne(id);
    return res.status(OK).json({ activity });
});

/**
 * Add one activity.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.post(
    '/',
    validateRequest.isActivity,
    async function (req: Request, res: Response) {
        const activity = req.body;

        await activityDao.add(activity);
        return res.status(CREATED).end();
    }
);

/**
 * Update one activity.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.put(
    '/:id',
    validateRequest.isActivity,
    async function (req: Request, res: Response) {
        const { id } = req.params;
        const Activity = req.body;

        await activityDao.update(id, Activity);
        return res.status(OK).end();
    }
);

/**
 * Delete one activity.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.delete('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    await activityDao.delete(id);
    return res.status(OK).end();
});

export default activityRouter;
