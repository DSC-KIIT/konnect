import { ITag } from '@entities/Tag';
import insertTag from './insertTag';
import getTag from './getTag';
import deleteTag from './deleteTag';
import replaceTag from './replaceTag';

export interface ITagDao {
    getOne: (id: string) => Promise<ITag | null>;
    getAll: () => Promise<ITag[]>;
    add: (tag: ITag) => Promise<void>;
    update: (id: string, tag: ITag) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

class TagDao implements ITagDao {
    /**
     * @param id
     */
    public getOne(id: string): Promise<ITag | null> {
        let content = getTag(id);
        return Promise.resolve(content);
    }

    /**
     *
     */
    public getAll(): Promise<ITag[]> {
        // TODO
        return Promise.resolve([]);
    }

    /**
     *
     * @param tag
     */
    public async add(tag: ITag): Promise<void> {
        await insertTag(tag);
        return Promise.resolve(undefined);
    }

    /**
     *
     * @param id
     * @param tag
     */
    public async update(id: string, tag: ITag): Promise<void> {
        await replaceTag(id, tag);
        return Promise.resolve(undefined);
    }

    /**
     *
     * @param id
     */
    public async delete(id: string): Promise<void> {
        await deleteTag(id);
        return Promise.resolve(undefined);
    }
}

export default TagDao;
