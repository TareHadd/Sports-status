export interface Sports {

    sports: SportsInterface[]

}

export interface SportsInterface {

    id: string;
    name: string;
    sourceSports: SourceSport[];
    deleted: boolean;
    translations?: any;
    createdBy?: any;
    createdAt: Date;

}

export interface SourceSport {
    sportID: string;
    source: number;
    sourceSportID: string;
    name: string;
    pairedBy: string;
    pairedAt: Date;
}


