export class Samsungproduct {
    id:number;
    samsung:string;
    Model:string;
    Rating:string;
    price:string;
    offers:string;
    save:string;
    deliverymode:string;
    name:string;

    constructor(id:number,name:string, samsung:string,Model:string,Rating:string,price:string,offers:string,save:string,deliverymode:string){
        this.id=id;
        this.samsung= samsung;
        this.Model=Model;
        this.Rating=Rating;
        this.price=price;
        this.offers=offers;
        this.save=save;
        this.deliverymode=deliverymode;
        this.name=name;
    }
}
