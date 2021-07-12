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
 *     Position :
 *       type: object
 *       required:
 *         - role
 *         - org
 *         - startdate
 *         - enddate
 *       properties:
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
 *         positions: [{role: 'Full-stack web developer',
 *                      org: 'Desire Foundation',
 *                      startdate: '',
 *                      enddate: ''}]
 *         tags: ['webdev', 'backend', 'node', 'docker']
 *         signupdate: ''
 *         lastaccessdate: ''
 *     Key:
 *       type: object
 *       required:
 *         - key
 *       properties:
 *         key:
 *           type: string
 *           description: uuid of the user
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user managing API
 */

/**
 * @swagger
 * /users:
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

/**
 * Get all users.
 *
 * @param req
 * @param res
 * @returns
 */
userRouter.get('/', async function (req: Request, res: Response) {
    const users = await userDao.getAll();
    return res.status(OK).json({ users });
});
/**
 * @swagger
 * /users/key:
 *   post:
 *     summary: get id by email
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Email'
 */
/**
 * Get key by email
 *
 * @param req
 * @param res
 * @returns
 */
userRouter.post('/key', async function (req: Request, res: Response) {
    const { email } = req.body;
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
 * /users/{id}:
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
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The book was not found
 */
/**
 * Get one user.
 *
 * @param req
 * @param res
 * @returns
 */
userRouter.get('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    const user = await userDao.getOne(id);
    return res.status(OK).json({ user });
});

/**
 * Add one user.
 *
 * @param req
 * @param res
 * @returns
 */
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
 * Update one user.
 *
 * @param req
 * @param res
 * @returns
 */
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
 * Delete one user.
 *
 * @param req
 * @param res
 * @returns
 */
userRouter.delete('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    await userDao.delete(id);
    return res.status(OK).end();
});


export default userRouter;
