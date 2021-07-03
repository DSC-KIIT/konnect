export interface IActivity {
    emoji: string;
    tags: string[];
    startdate: string;
    enddate: string;
    title: string;
    description: string;
    likes: number[];
    media: string[];
}

class Activity implements IActivity {
    public emoji: string;
    public tags: string[];
    public startdate: string;
    public enddate: string;
    public title: string;
    public description: string;
    public likes: number[];
    public media: string[];

    constructor(Activity: IActivity) {
        this.emoji = Activity.emoji;
        this.tags = Activity.tags;
        this.startdate = Activity.startdate;
        this.enddate = Activity.enddate;
        this.title = Activity.title;
        this.description = Activity.description;
        this.likes = Activity.likes;
        this.media = Activity.media;
    }
}

export default Activity;
