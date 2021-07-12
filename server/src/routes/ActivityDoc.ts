import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import ActivityDao from '@daos/Activity/ActivityDao';
import { paramMissingError } from '@shared/constants';

const activityDao = new ActivityDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import validateRequests from '@middlewares/validateRequest';
const validateRequest = new validateRequests();

import express from 'express';
let activityDocRouter = express.Router();


/**
 * Get user activitydoc.
 *
 * @param req
 * @param res
 * @returns
 */
activityDocRouter.get(
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
activityDocRouter.post('/', async function (req: Request, res: Response) {
    const { activitydoc } = req.body;
    const activity = await activityDao.insertDoc(activitydoc);
    return res.status(OK).json({ activity });
});

/**
 * Delete user activitydoc.
 *
 * @param req
 * @param res
 * @returns
 */
activityDocRouter.delete(
    '/user/:username',
    async function (req: Request, res: Response) {
        const { username } = req.params;
        await activityDao.deleteAll(username);
        return res.status(OK).end();
    }
);

export default activityDocRouter;
