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

export interface IActivityEntry {
    username: string;
    activities: IActivity[];
}

class ActivityEntry implements IActivityEntry {
    public username: string;
    public activities: IActivity[];
    constructor(activityentry?: IActivityEntry) {
        this.username = activityentry?.username || '';
        this.activities = activityentry?.activities || [];
    }
}

export default ActivityEntry;
