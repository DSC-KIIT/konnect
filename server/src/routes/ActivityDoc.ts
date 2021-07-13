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
 * @swagger
 * components:
 *   schemas:
 *     ActivityDoc:
 *       type: object
 *       required:
 *         - username
 *         - activities
 *       properties:
 *         username:
 *           type: string
 *           description: username of the user
 *         activities:
 *           type: array
 *           description: list of activities
 *       example:
 *         username: adityameharia
 *         activities: [{
 *           id: activityid,
 *           emoji: ':thumbsup:',
 *           tags: ['ReactJS', 'node', 'graphql'],
 *           startdate: '',
 *           enddate: '',
 *           title: 'An interesting title',
 *           description: 'A discription',
 *           likes: [''],
 *           media: ['']
 *         }]
 */

/**
 * @swagger
 * tags:
 *   name: ActivityDoc
 */

/**
 * @swagger
 * /api/activitydoc/user/{username}:
 *   get:
 *     summary: Get the activitydoc by username
 *     tags: [ActivityDoc]
 *     parameters:
 *       - name: username
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The user's unique username
 *     responses:
 *       200:
 *         description: The activity
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityDoc'
 *       404:
 *         description: not found
 */

// Get user activitydoc.
activityDocRouter.get(
    '/user/:username',
    async function (req: Request, res: Response) {
        const { username } = req.params;
        const activity = await activityDao.getAll(username);
        return res.status(OK).json({ activity });
    }
);

/**
 * @swagger
 * /api/activitydoc:
 *   post:
 *     summary: Inserts an activity doc
 *     tags: [ActivityDoc]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               activitydoc:
 *                 $ref: '#/components/schemas/ActivityDoc'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

// Insert user activitydoc.
activityDocRouter.post('/', async function (req: Request, res: Response) {
    const { activitydoc } = req.body;
    const activity = await activityDao.insertDoc(activitydoc);
    return res.status(OK).json({ activity });
});

/**
 * @swagger
 * /api/activitydoc/user/{username}:
 *   delete:
 *     summary: Delete the activitydoc by username
 *     tags: [ActivityDoc]
 *     parameters:
 *       - name: username
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *         description: The user's unique username
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: The activitydoc was not found
 */


// Delete user activitydoc. 
activityDocRouter.delete(
    '/user/:username',
    async function (req: Request, res: Response) {
        const { username } = req.params;
        await activityDao.deleteAll(username);
        return res.status(OK).end();
    }
);

export default activityDocRouter;
