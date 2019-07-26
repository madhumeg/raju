export class Androidprodut {
    id:number;
    name:string;
    image:string;
    title:string;
    ram:string;
    storage:string;
    battery:string;
    selfie:string;
    screen:string;
    sim:string;
    vertion:string;
    amount:string;

    constructor(id:number,name:string,image:string,title:string,ram:string,
        storage:string,battery:string,selfie:string,screen:string,sim:string,
        vertion:string,amount:string){
        this.id=id;
        this.name= name;
        this.image=image;
        this.title=title;
        this.ram=ram;
        this.storage=storage;
        this.battery=battery;
        this.selfie=selfie;
        this.screen=screen;
        this.sim=sim;
        this.vertion=vertion;
        this.amount=amount;
    }
}
