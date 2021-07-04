import { Request, Response, NextFunction } from 'express';
import { paramMissingError } from '@shared/constants';

import StatusCodes from 'http-status-codes';
const { BAD_REQUEST } = StatusCodes;

import User from '@entities/User';
import Activity from '@entities/Activity';
import Tag from '@entities/Tag';

class validateRequests {
    isUser(req: Request, res: Response, next: NextFunction) {
        var keys = Object.keys(new User());
        const user = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        if (keys.every((key) => Object.keys(user).includes(key))) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }

    isActivity(req: Request, res: Response, next: NextFunction) {
        var keys = Object.keys(new Activity());
        const activity = req.body;
        if (!activity) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        if (keys.every((key) => Object.keys(activity).includes(key))) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }

    isTag(req: Request, res: Response, next: NextFunction) {
        var keys = Object.keys(new Tag());

        const tag = req.body;
        if (!tag) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        if (keys.every((key) => Object.keys(tag).includes(key))) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }
}

export default validateRequests;
