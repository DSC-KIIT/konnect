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
