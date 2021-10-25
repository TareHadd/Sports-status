export interface CategoryInterface {

    id: string;
    name: string;
    sportID: string;
    countryID?: any;
    country?: any;
    sourceCategories: SourceCategory[];
    deleted: boolean;
    translations?: any;
    createdBy: string;
    createdAt: Date;

}

export interface SourceCategory {

    categoryID: string;
    source: number;
    sourceCategoryID: string;
    sourceSportID: string;
    sourceCountryID?: any;
    name: string;
    pairedBy: string;
    pairedAt: Date;
    
}
