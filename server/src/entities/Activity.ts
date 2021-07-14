export interface IActivity {
    id: string;
    emoji: string;
    tags: string[];
    startdate: string;
    enddate: string;
    title: string;
    description: string;
    likes: string[];
    media: string[];
}

class Activity implements IActivity {
    public id: string;
    public emoji: string;
    public tags: string[];
    public startdate: string;
    public enddate: string;
    public title: string;
    public description: string;
    public likes: string[];
    public media: string[];

    constructor(activity?: IActivity) {
        this.id = activity?.id || '';
        this.emoji = activity?.emoji || '';
        this.tags = activity?.tags || [];
        this.startdate = activity?.startdate || '';
        this.enddate = activity?.enddate || '';
        this.title = activity?.title || '';
        this.description = activity?.description || '';
        this.likes = activity?.likes || [];
        this.media = activity?.media || [];
    }
}

export default Activity;