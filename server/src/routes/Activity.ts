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
activityRouter.get(
    '/user/:username/key/:key',
    async function (req: Request, res: Response) {
        const { username, key } = req.params;
        const activity = await activityDao.getOne(username, key);
        return res.status(OK).json({ activity });
    }
);

/**
 * Insert one activity.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.post(
    '/',
    // validateRequest.isActivity,
    async function (req: Request, res: Response) {
        const { username, activity } = req.body;

        await activityDao.add(username, activity);
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
    '/',
    // validateRequest.isActivity,
    async function (req: Request, res: Response) {
        const { username, activity } = req.body;

        await activityDao.update(username, activity);
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
activityRouter.delete(
    '/user/:username/key/:key',
    async function (req: Request, res: Response) {
        const { username, key } = req.params;
        await activityDao.delete(username, key);
        return res.status(OK).end();
    }
);

export default activityRouter