import { IActivity } from './Activity';

export interface IActivityDoc {
    username: string;
    activities: IActivity[];
}

class ActivityDoc implements IActivityDoc {
    public username: string;
    public activities: IActivity[];
    constructor(activityentry?: IActivityDoc) {
        this.username = activityentry?.username || '';
        this.activities = activityentry?.activities || [];
    }
}

export default ActivityDoc;
