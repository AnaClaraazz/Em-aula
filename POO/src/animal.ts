export abstract class Animal{
    especie: string;
    idade: number;
    familia: string;
    nome: string;

    constructor(
        especie: string,
        idade: number,
        familia: string,
        nome: string

    ){
        this.especie = especie
        this.idade = idade
        this.familia = familia
        this.nome = nome
    }
    corre():void{

        //console.log(`To correndo igual um animal`);
    }
    cacar():void{
        //console.log(`Vou caçar`);
    }
    dormir():void{
        //console.log(`A mimir`);
    }
}