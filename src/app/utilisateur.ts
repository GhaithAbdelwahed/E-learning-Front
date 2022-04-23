export class Utilisateur {
    id:number;
    nom:string;
    prenom:string;
    email:string;
    mdp:string;
    constructor(){}

    public get_id(){return this.id;}
}
