export interface IPosition {
    id: string;
    role: string;
    org: string;
    startdate: string;
    endddate: string;
}

class Position implements IPosition {
    public id: string;
    public role: string;
    public org: string;
    public startdate: string;
    public endddate: string;

    constructor(position?: IPosition) {
        this.id = position?.id || '';
        this.role = position?.role || '';
        this.org = position?.org || '';
        this.startdate = position?.startdate || '';
        this.endddate = position?.endddate || '';
    }
}

export default Position;
