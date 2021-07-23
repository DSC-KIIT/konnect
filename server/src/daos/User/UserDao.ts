import { IUser } from '@entities/User';
import insertUser from './insertUser';
import getUser from './getUser';
import deleteUser from './deleteUser';
import replaceUser from './replaceUser';
import getKey from './getKey';
import getAllUsers from './getAllUsers';

export interface IUserDao {
    getOne: (id: string) => Promise<IUser | null>;
    getAll: () => Promise<IUser[]>;
    getKeyByEmail: (email: string) => Promise<string | null>;
    add: (user: IUser) => Promise<void>;
    update: (id: string, user: IUser) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

class UserDao implements IUserDao {
    /**
     * @param id
     */
    public getOne(id: string): Promise<IUser | null> {
        let content = getUser(id);
        return Promise.resolve(content);
    }

    /**
     *
     */
    public getAll(): Promise<IUser[]> {
        let content = getAllUsers();
        return Promise.resolve(content);
    }
    /**
     * @param email
     */
    public getKeyByEmail(email: string): Promise<string | null> {
        let key = getKey(email);
        return Promise.resolve(key);
    }

    /**
     *
     * @param user
     */
    public async add(user: IUser): Promise<void> {
        await insertUser(user);
        return Promise.resolve(undefined);
    }

    /**
     *
     * @param id
     * @param user
     */
    public async update(id: string, user: IUser): Promise<void> {
        await replaceUser(id, user);
        return Promise.resolve(undefined);
    }

    /**
     *
     * @param id
     */
    public async delete(id: string): Promise<void> {
        await deleteUser(id);
        return Promise.resolve(undefined);
    }
}

export default UserDao;
