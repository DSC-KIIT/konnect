interface IPosition {
    role: string;
    org: string;
    startdate: string;
    endddate: string;
}

export interface IUser {
    username: string;
    name: string;
    email: string;
    branch: string;
    image: string;
    coverimg: string;
    followers: number;
    following: number;
    socials: string[];
    header: string;
    pronouns: string;
    location: string;
    bio: string;
    positions: IPosition[];
    tags: string[];
    signupdate: string;
    lastaccessdate: string;
}

class User implements IUser {
    public username: string;
    public name: string;
    public email: string;
    public branch: string;
    public image: string;
    public coverimg: string;
    public followers: number;
    public following: number;
    public socials: string[];
    public header: string;
    public pronouns: string;
    public location: string;
    public bio: string;
    public positions: IPosition[];
    public tags: string[];
    public signupdate: string;
    public lastaccessdate: string;

    constructor(User?: IUser) {
        this.username = User?.username || '';
        this.name = User?.name || '';
        this.email = User?.email || '';
        this.branch = User?.branch || '';
        this.image = User?.image || '';
        this.coverimg = User?.coverimg || '';
        this.followers = User?.followers || 0;
        this.following = User?.following || 0;
        this.socials = User?.socials || [];
        this.header = User?.header || '';
        this.pronouns = User?.pronouns || '';
        this.location = User?.location || '';
        this.bio = User?.bio || '';
        this.positions = User?.positions || [];
        this.tags = User?.tags || [];
        this.signupdate = User?.signupdate || '';
        this.lastaccessdate = User?.lastaccessdate || '';
    }
}

export default User;
