import { IActivity } from '@entities/Activity';
import { IActivityEntry } from '@entities/Activity';
import getOneActivity from './getOneActivity';
import getActivities from './getActivities';
import insertActivity from './insertActivity';
import insertActivityDoc from './insertActivityDoc';
import deleteActivity from './deleteActivity';
import deleteActivityDoc from './deleteActivityDoc';
import updateActivity from './updateActivity';

export interface IActivityDao {
    getOne: (username: string, key: string) => Promise<IActivity | null>;
    getAll: (username: string) => Promise<IActivityEntry | null>;
    insertDoc: (activitydoc: IActivityEntry) => Promise<void>;
    add: (username: string, activity: IActivity) => Promise<void>;
    update: (username: string, activity: IActivity) => Promise<void>;
    delete: (username: string, key: string) => Promise<void>;
    deleteAll: (username: string) => Promise<void>;
}

class ActivityDao implements IActivityDao {
    /**
     * @param username
     * @param id
     */
    public getOne(username: string, key: string): Promise<IActivity | null> {
        let content = getOneActivity(username, key);
        return Promise.resolve(content);
    }

    /**
     * @param username
     */
    public getAll(username: string): Promise<IActivityEntry> {
        let content = getActivities(username);
        return Promise.resolve(content);
    }

    /**
     * @param username
     * @param activity
     */
    public async add(username: string, activity: IActivity): Promise<void> {
        await insertActivity(username, activity);
        return Promise.resolve(undefined);
    }

    /**
     * @param activitydoc
     */
    public async insertDoc(activitydoc: IActivityEntry): Promise<void> {
        await insertActivityDoc(activitydoc);
        return Promise.resolve(undefined);
    }

    /**
     * @param username
     * @param activity
     */
    public async update(username: string, activity: IActivity): Promise<void> {
        await updateActivity(username, activity);
        return Promise.resolve(undefined);
    }

    /**
     * @param username
     * @param key
     */
    public async delete(username: string, key: string): Promise<void> {
        await deleteActivity(username, key);
        return Promise.resolve(undefined);
    }

    /**
     * @param username
     */
    public async deleteAll(username: string): Promise<void> {
        await deleteActivityDoc(username);
        return Promise.resolve(undefined);
    }
}

export default ActivityDao;
