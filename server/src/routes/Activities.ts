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
 * Get user activitydoc.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.get(
    '/user/:username',
    async function (req: Request, res: Response) {
        const { username } = req.body;
        const activity = await activityDao.getAll(username);
        return res.status(OK).json({ activity });
    }
);

/**
 * Insert user activitydoc.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.post('/', async function (req: Request, res: Response) {
    const { activitydoc } = req.body;
    const activity = await activityDao.insertDoc(activitydoc);
    return res.status(OK).json({ activity });
});

/**
 * Insert one activity.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.put(
    '/insertOne',
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
    '/updateOne',
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
activityRouter.put('/deleteOne', async function (req: Request, res: Response) {
    const { username, key } = req.body;
    await activityDao.delete(username, key);
    return res.status(OK).end();
});

/**
 * Delete user activitydoc.
 *
 * @param req
 * @param res
 * @returns
 */
activityRouter.delete(
    '/user/:username',
    async function (req: Request, res: Response) {
        const { username } = req.params;
        await activityDao.deleteAll(username);
        return res.status(OK).end();
    }
);

export default activityRouter;
