export interface CompetitorsInterface {
    id: string;
    name: string;
    sportID: string;
    countryID?: any;
    country?: any;
    competitorPlayers?: any;
    sourceCompetitors: SourceCompetitor[];
    lastCheckedBy?: any;
    lastCheck: Date;
    deleted: boolean;
    translations?: any;
    createdBy?: any;
    createdAt: Date;
}

export interface SourceCompetitor {
    competitorID: string;
    source: number;
    sourceCompetitorID: string;
    name: string;
    sourceSportID: string;
    sourceCountryID?: any;
    pairedBy?: any;
    pairedAt: Date;
}
