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
 * @swagger
 * components:
 *   schemas:
 *     Position:
 *       type: object
 *       required:
 *         - id
 *         - role
 *         - org
 *         - startdate
 *         - enddate
 *       properties:
 *         id:
 *           type: string
 *           description: uuid of the position
 *         role:
 *           type: string
 *           description: role in organization
 *         org:
 *           type: string
 *           description: name of the organization
 *         startdate:
 *           type: string
 *           description: start date at the org
 *         enddate:
 *           type: string
 *           description: end date at the org
 *       example:
 *         id: ""
 *         role: Full-Stack web developer
 *         enddate: ""
 *         startdate: ""
 */

/**
 * @swagger
 * tags:
 *   name: Positions
 */

/**
 * @swagger
 * /api/positions/{uuid}:
 *   get:
 *     summary: Returns the list of all the positions of the user
 *     tags: [Positions]
 *     parameters:
 *       - name: uuid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The list of positions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Position'
 */

// Get all positions.
positionRouter.get('/:key', async function (req: Request, res: Response) {
    const { key } = req.params;
    const positions = await positionDao.getAll(key);
    return res.status(OK).json({ positions });
});

/**
 * @swagger
 * /api/positions/user/{uuid}/position/{positionid}:
 *   get:
 *     summary: Get the position by id
 *     tags: [Positions]
 *     parameters:
 *       - name: uuid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *       - name: positionid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The position id
 *     responses:
 *       200:
 *         description: The position
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Position'
 *       404:
 *         description: not found
 */

// get one position
positionRouter.get(
    '/user/:key/position/:positionid',
    async function (req: Request, res: Response) {
        const { key, positionid } = req.params;
        if (!key || !positionid) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        const position = await positionDao.get(key, positionid);
        return res.status(OK).json({ position });
    }
);
/**
 * @swagger
 * /api/positions:
 *   post:
 *     summary: Inserts a position
 *     tags: [Positions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key:
 *                 type: string
 *                 required: true
 *               position:
 *                 $ref: '#/components/schemas/Position'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

// insert one position
positionRouter.post(
    '/',
    validateRequest.isPosition,
    async function (req: Request, res: Response) {
        const { key, position } = req.body;
        await positionDao.add(key, position);
        return res.status(CREATED).end();
    }
);

/**
 * @swagger
 * /api/positions:
 *   put:
 *     summary: Updates a position
 *     tags: [Positions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key:
 *                 type: string
 *                 required: true
 *               position:
 *                 $ref: '#/components/schemas/Position'
 *     responses:
 *       201:
 *         description: Updated
 *       400:
 *         description: Bad Request
 */

// update one position
positionRouter.put(
    '/',
    validateRequest.isPosition,
    async function (req: Request, res: Response) {
        const { key, position } = req.body;
        await positionDao.update(key, position);
        return res.status(OK).end();
    }
);

/**
 * @swagger
 * /api/positions/user/{uuid}/position/{positionid}:
 *   delete:
 *     summary: Delete the position by id
 *     tags: [Positions]
 *     parameters:
 *       - name: uuid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *       - name: positionid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The position id
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: The position was not found
 */

// delete one position
positionRouter.delete(
    '/user/:key/position/:positionid',
    async function (req: Request, res: Response) {
        const { key, positionid } = req.params;
        if (!key || !positionid) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await positionDao.delete(key, positionid);
        return res.status(OK).end();
    }
);

export default positionRouter;
