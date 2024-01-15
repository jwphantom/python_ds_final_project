export type PredictionType = {
    malade: boolean,
    categorie: string,
    precision: number,
    gravite: string
}
export type MaladiesPlantes = {
    Cordana: string;
    Pestalotiopsis: string;
    Sigatoka: string;
    [key: string]: string; // Signature d'index générique
};

export type ResponseImage = {
    malade: boolean,
    time_created: string,
    precision: number,
    id: string,
    gravite: string,
    categorie: string,
    img_base64: string
};





