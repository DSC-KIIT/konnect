import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TagDao from '@daos/Tag/TagDao';
import { paramMissingError } from '@shared/constants';

const tagDao = new TagDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import validateRequests from '../middlewares/validateRequests';
const validateRequest = new validateRequests();

import express from 'express';
let tagRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tag:
 *       type: object
 *       required:
 *         - name
 *         - icon
 *       properties:
 *         name:
 *           type: string
 *           description: name of the tag
 *         icon:
 *           type: string
 *           description: icon of the tag
 *       example:
 *         name: ""
 *         icon: ""
 */

/**
 * @swagger
 * tags:
 *   name: Tags
 */

/**
 * @swagger
 * /api/tags/{name}:
 *   get:
 *     summary: Get the tag by name
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The tag name
 *     responses:
 *       200:
 *         description: The tag description by name
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       404:
 *         description: The tag was not found
 */

// Get one tag.
tagRouter.get('/:name', async function (req: Request, res: Response) {
    const { name } = req.params;
    if (!name) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    const tag = await tagDao.getOne(name);
    return res.status(OK).json({ tag });
});

/**
 * @swagger
 * /api/tags:
 *   post:
 *     summary: Creates a tag
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tag'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

// Add one tag.
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
 * @swagger
 * /api/tags:
 *   put:
 *     summary: Updates a tag
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tag'
 *     responses:
 *       201:
 *         description: Updated
 *       400:
 *         description: Bad Request
 */

// Update one tag.

tagRouter.put(
    '/',
    validateRequest.isTag,
    async function (req: Request, res: Response) {
        const tag = req.body;

        await tagDao.update(tag);
        return res.status(OK).end();
    }
);

/**
 * @swagger
 * /api/tags/{name}:
 *   delete:
 *     summary: Delete the tag by name
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The tag name
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: The tag was not found
 */

/**
 * Delete one tag.
 *
 * @param req
 * @param res
 * @returns
 */
tagRouter.delete('/:name', async function (req: Request, res: Response) {
    const { name } = req.params;
    if (!name) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await tagDao.delete(name);
    return res.status(OK).end();
});

export default tagRouter;
