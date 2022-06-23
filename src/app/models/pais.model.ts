
export interface NativeName {
    spa: TranslationsGen;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface TranslationsGen {
    official: string;
    common: string;
}

export interface Translations {
    ara: TranslationsGen;
    ces: TranslationsGen;
    cym: TranslationsGen;
    deu: TranslationsGen;
    est: TranslationsGen;
    fin: TranslationsGen;
    fra: TranslationsGen;
    hrv: TranslationsGen;
    hun: TranslationsGen;
    ita: TranslationsGen;
    jpn: TranslationsGen;
    kor: TranslationsGen;
    nld: TranslationsGen;
    per: TranslationsGen;
    pol: TranslationsGen;
    por: TranslationsGen;
    rus: TranslationsGen;
    slk: TranslationsGen;
    spa: TranslationsGen;
    swe: TranslationsGen;
    urd: TranslationsGen;
    zho: TranslationsGen;
}

export interface DemonymGen {
    f: string;
    m: string;
}

export interface Demonyms {
    eng: DemonymGen;
    fra: DemonymGen;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Gini {
    2018: number;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface PostalCode {
    format: string;
    regex: string;
}

export interface PaisModel {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: any;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: any;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}
