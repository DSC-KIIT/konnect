import { Request, Response, NextFunction } from 'express';
import { paramMissingError } from '@shared/constants';

import StatusCodes from 'http-status-codes';
const { BAD_REQUEST } = StatusCodes;

import User from '@entities/User';
import Position from '@entities/Position';
import Activity from '@entities/Activity';
import ActivityDoc from '@entities/ActivityDoc';
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
        if (
            keys.every((key) => Object.keys(user).includes(key)) &&
            Object.keys(keys).length == Object.keys(user).length
        ) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }

    isActivity(req: Request, res: Response, next: NextFunction) {
        var keys = Object.keys(new Activity());
        const { activity } = req.body;
        if (!activity) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        if (
            keys.every((key) => Object.keys(activity).includes(key)) &&
            Object.keys(keys).length == Object.keys(activity).length
        ) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }

    isActivityDoc(req: Request, res: Response, next: NextFunction) {
        var keys = Object.keys(new ActivityDoc());
        const { activitydoc } = req.body;
        if (!activitydoc) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        if (
            keys.every((key) => Object.keys(activitydoc).includes(key)) &&
            Object.keys(keys).length == Object.keys(activitydoc).length
        ) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }

    isPosition(req: Request, res: Response, next: NextFunction) {
        var keys = Object.keys(new Position());

        const { position } = req.body;
        if (!position) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        if (
            keys.every((key) => Object.keys(position).includes(key)) &&
            Object.keys(keys).length == Object.keys(position).length
        ) {
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
        if (
            keys.every((key) => Object.keys(tag).includes(key)) &&
            Object.keys(keys).length == Object.keys(tag).length
        ) {
            next();
        } else
            res.status(BAD_REQUEST).json({
                error: 'badType',
            });
    }
}

export default validateRequests;
