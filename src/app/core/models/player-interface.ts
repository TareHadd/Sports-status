export interface PlayerInterface {

    id: string;
    sportID: string;
    countryID: string;
    name: string;
    sourcePlayers: SourcePlayer[];
    deleted: boolean;
    createdBy: string;
    createdAt: Date;

}

export interface SourcePlayer {
    playerID: string;
    source: number;
    sourcePlayerID: string;
    sourceSportID: string;
    sourceCountryID: string;
    name: string;
    pairedBy: string;
    pairedAt: Date;
}