export interface CompetitionInterface {

    id: string;
    name: string;
    sportID: string;
    categoryID: string;
    seasons: Season[];
    sourceCompetitions: SourceCompetition[];
    lastCheckedBy?: any;
    lastCheck: Date;
    deleted: boolean;
    translations?: any;
    createdBy?: any;
    createdAt: Date;
}

export interface Season {
    id: string;
    name: string;
    sportID: string;
    competitionID: string;
    sourceSeasons?: any;
    lastCheckedBy?: any;
    lastCheck: Date;
    deleted: boolean;
    translations?: any;
    createdBy: string;
    createdAt: Date;
}

export interface SourceCompetition {
    competitionID: string;
    source: number;
    sourceCompetitionID: string;
    sourceSportID: string;
    sourceCategoryID: string;
    currentSourceSeasonID: string;
    name: string;
    pairedBy?: any;
    pairedAt: Date;
}
