import { MaladiesPlantes } from "../types"

export const LIST_REGION: string[] = [
    'Littoral',
    'Ouest',
    'Nord-Ouest',
    'Sud-Ouest',
    'Centre',
    'Est',
    'Adamaoua',
    'Nord',
    'Sud',
    'Extrême-Nord',
]
export const CORRECTION_DISEASES: MaladiesPlantes = {
    Cordana:
        `Prévention : Assurez-vous d'avoir une rotation des cultures, car la maladie peut survivre dans le sol. Évitez l'arrosage excessif et assurez une bonne circulation de l'air autour des plantes.
Traitement : Utilisez des fongicides appropriés selon les recommandations spécifiques à la Cordana. Éliminez les parties infectées de la plante.`,
    Pestalotiopsis:
        `Prévention : Évitez les conditions de forte humidité, car la maladie prospère dans un environnement humide. Éliminez les parties infectées et désinfectez les outils de jardinage.
Traitement : Utilisez des fongicides recommandés pour lutter contre Pestalotiopsis. Supprimez les parties gravement touchées.`,
    Sigatoka:
        `Prévention : Pratiquez une gestion intégrée des maladies, en éliminant les feuilles infectées et en utilisant des variétés résistantes lorsque possible.
Traitement : Appliquez des fongicides appropriés selon les recommandations. Évitez l'arrosage excessif pour réduire l'humidité.`
}
export const DEFINITION_DISEASES: MaladiesPlantes = {
    Cordana:
        `La maladie de Cordana, également connue sous le nom de pourriture des racines Cordana, est une maladie fongique qui affecte principalement les racines des plantes. Elle est causée par des champignons du genre Cordana. Les symptômes comprennent le flétrissement des feuilles, la décoloration et la pourriture des racines`,
    Pestalotiopsis:
        `La Pestalotiopsis est un genre de champignons pathogènes qui peut infecter diverses plantes, provoquant des maladies telles que la pourriture des racines, la pourriture des feuilles et des tiges. Les conditions humides favorisent le développement de cette maladie.`,
    Sigatoka:
        `La Sigatoka est une maladie qui affecte les plantes, en particulier les bananiers. Il existe plusieurs types de Sigatoka, notamment la Sigatoka jaune, la Sigatoka noire et la Sigatoka brun. Ces maladies fongiques provoquent des taches sur les feuilles, réduisant la photosynthèse et affectant la production de fruits.`
}