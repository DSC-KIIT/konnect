import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import PositionDao from '@daos/User/Position/PositionDao';
import { paramMissingError } from '@shared/constants';

const positionDao = new PositionDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import validateRequests from '@middlewares/validateRequest';
const validateRequest = new validateRequests();

import express from 'express';
let positionRouter = express.Router();

/**
 * get one position
 * @param req
 * @param res
 * @returns
 */
positionRouter.get(
    '/user/:key/position/:positionid',
    async function (req: Request, res: Response) {
        const { key, positionid } = req.params;
        const position = await positionDao.get(key, positionid);
        return res.status(OK).json({ position });
    }
);

/**
 * insert one position
 * @param req
 * @param res
 * @returns
 */
positionRouter.post('/', async function (req: Request, res: Response) {
    const { key, position } = req.body;
    await positionDao.add(key, position);
    return res.status(CREATED).end();
});

/**
 * update one position
 * @param req
 * @param res
 * @returns
 */
positionRouter.put('/', async function (req: Request, res: Response) {
    const { key, position } = req.body;
    await positionDao.update(key, position);
    return res.status(OK).end();
});

/**
 * delete one position
 * @param req
 * @param res
 * @returns
 */
positionRouter.delete(
    '/user/:key/position/:positionid',
    async function (req: Request, res: Response) {
        const { key, positionid } = req.params;
        await positionDao.delete(key, positionid);
        return res.status(OK).end();
    }
);

export default positionRouter;
