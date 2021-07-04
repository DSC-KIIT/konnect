import { IActivity } from '@entities/Activity';
import getActivity from './getActivity';
import insertActivity from './insertActivity';
import deleteActivity from './deleteActivity';
import replaceActivity from './replaceActivity';

export interface IActivityDao {
    getOne: (id: string) => Promise<IActivity | null>;
    getAll: () => Promise<IActivity[]>;
    add: (user: IActivity) => Promise<void>;
    update: (id: string, user: IActivity) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

class ActivityDao implements IActivityDao {
    /**
     * @param id
     */
    public getOne(id: string): Promise<IActivity | null> {
        let content = getActivity(id);
        return Promise.resolve(content);
    }

    /**
     *
     */
    public getAll(): Promise<IActivity[]> {
        // TODO
        return Promise.resolve([]);
    }

    /**
     *
     * @param activity
     */
    public async add(activity: IActivity): Promise<void> {
        await insertActivity(activity);
        return Promise.resolve(undefined);
    }

    /**
     *
     * @param id
     * @param activity
     */
    public async update(id: string, activity: IActivity): Promise<void> {
        await replaceActivity(id, activity);
        return Promise.resolve(undefined);
    }

    /**
     *
     * @param id
     */
    public async delete(id: string): Promise<void> {
        await deleteActivity(id);
        return Promise.resolve(undefined);
    }
}

export default ActivityDao;
