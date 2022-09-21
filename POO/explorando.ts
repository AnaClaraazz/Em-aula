class Carro{
    carname: string;

    constructor(
       
        carname: string, 
    ){
        this.carname = carname
    }
    verPossante(){
        console.log(`Eu não tenho ${this.carname}`);
  }
}