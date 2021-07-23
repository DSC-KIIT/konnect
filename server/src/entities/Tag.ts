export interface ITag {
    name: string;
    icon: string;
}

class Tag implements ITag {
    public name: string;
    public icon: string;

    constructor(Tag?: ITag) {
        this.name = Tag?.name || '';
        this.icon = Tag?.icon || '';
    }
}

export default Tag;
