import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import UserDao from '@daos/User/UserDao';
import { paramMissingError } from '@shared/constants';

const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import validateRequests from '@middlewares/validateRequest';
const validateRequest = new validateRequests();

import express from 'express';
let userRouter = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - name
 *         - email
 *         - branch
 *         - image
 *         - coverimg
 *         - followers
 *         - following
 *         - socials
 *         - header
 *         - pronouns
 *         - location
 *         - bio
 *         - positions
 *         - tags
 *         - signupdate
 *         - lastaccessdate
 *       properties:
 *         username:
 *           type: string
 *           description: unique username of the user
 *         name:
 *           type: string
 *           description: name of the user
 *         email:
 *           type: string
 *           description: email of the user
 *         branch:
 *           type: string
 *           description: branch to which the user belongs to
 *         image:
 *           type: string
 *           description: url of the profile image
 *         coverimg:
 *           type: string
 *           description: url of the cover image
 *         followers:
 *           type: number
 *           description: no. of people that follow the user
 *         following:
 *           type: number
 *           description: no. of people followed by the user
 *         socials:
 *           type: string[]
 *           description: social media account urls of the user.
 *         header:
 *           type: string
 *           description: a quick intro of the user
 *         pronouns:
 *           type: string
 *           description: 'personal pronouns of the user (e.g.: He/Him)'
 *         location:
 *           type: string
 *           description: location of the user
 *         bio:
 *           type: string
 *           description: a short bio of the user
 *         positions:
 *           type: Position[]
 *           description: array containg position objects
 *         tags:
 *           type: string[]
 *           description: array containing tag names
 *         signupdate:
 *           type: string
 *           description: sign up date of the user
 *         lastaccessdate:
 *           type: string
 *           description: last login date of the user
 *
 *       example:
 *         username: adityameharia
 *         name: Aditya Meharia
 *         email: 1905659@kiit.ac.in
 *         branch: cse
 *         image: "https://picsum.photos/400"
 *         coverimg: "https://picsum.photos/800/200"
 *         followers: 69
 *         following: 420
 *         socials: ['https://github.com/adityameharia', 'https://twitter.com/adityameharia', 'https://www.instagram.com/mehariaaditya']
 *         header: 'Lmaoing through life'
 *         pronouns: 'He/Him'
 *         location: 'Kolkata'
 *         bio: 'Me nub pls halp'
 *         positions: [{id: { id },
 *                      role: 'Full-stack web developer',
 *                      org: 'Desire Foundation',
 *                      startdate: '',
 *                      enddate: ''}]
 *         tags: ['webdev', 'backend', 'node', 'docker']
 *         signupdate: ''
 *         lastaccessdate: ''
 */

/**
 * @swagger
 * tags:
 *   name: Users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

// Get all users.
userRouter.get('/', async function (req: Request, res: Response) {
    const users = await userDao.getAll();
    return res.status(OK).json({ users });
});
/**
 * @swagger
 * /api/users/key/{email}:
 *   get:
 *     summary: get uuid by email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: The user email
 *     responses:
 *       200:
 *         description: The uuid of the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 */

// Get key by email
userRouter.get('/key/:email', async function (req: Request, res: Response) {
    const { email } = req.params;
    if (!email) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    const key = await userDao.getKeyByEmail(email);
    return res.status(OK).json({ key: key });
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */

// Get one user.
userRouter.get('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    const user = await userDao.getOne(id);
    return res.status(OK).json({ user });
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Creates a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

// Add one user
userRouter.post(
    '/',
    validateRequest.isUser,
    async function (req: Request, res: Response) {
        const user = req.body;

        await userDao.add(user);
        return res.status(CREATED).end();
    }
);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Updates a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Updated
 *       400:
 *         description: Bad Request
 */

// Update one user.
userRouter.put(
    '/:id',
    validateRequest.isUser,
    async function (req: Request, res: Response) {
        const { id } = req.params;
        const user = req.body;

        await userDao.update(id, user);
        return res.status(OK).end();
    }
);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: The user was not found
 */

// Delete one user.
userRouter.delete('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await userDao.delete(id);
    return res.status(OK).end();
});

export default userRouter;
