import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TagDao from '@daos/Tag/TagDao';
import { paramMissingError } from '@shared/constants';

const tagDao = new TagDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import validateRequests from '@middlewares/validateRequest';
const validateRequest = new validateRequests();

import express from 'express';
let tagRouter = express.Router();

/**
 * Get one tag.
 *
 * @param req
 * @param res
 * @returns
 */
tagRouter.get('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    const tag = await tagDao.getOne(id);
    return res.status(OK).json({ tag });
});

/**
 * Add one tag.
 *
 * @param req
 * @param res
 * @returns
 */
tagRouter.post(
    '/',
    validateRequest.isTag,
    async function (req: Request, res: Response) {
        const tag = req.body;

        await tagDao.add(tag);
        return res.status(CREATED).end();
    }
);

/**
 * Update one tag.
 *
 * @param req
 * @param res
 * @returns
 */
tagRouter.put(
    '/:id',
    validateRequest.isTag,
    async function (req: Request, res: Response) {
        const { id } = req.params;
        const tag = req.body;

        await tagDao.update(id, tag);
        return res.status(OK).end();
    }
);

/**
 * Delete one tag.
 *
 * @param req
 * @param res
 * @returns
 */
tagRouter.delete('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    await tagDao.delete(id);
    return res.status(OK).end();
});

export default tagRouter;
