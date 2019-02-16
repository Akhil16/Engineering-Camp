export class VendingMachiene{
    private drinkName :string;
    private quantityOfDrink :number;
    private noOfCupsRequired :number;
    private costOfOneCup:number;
    private concentrationRequired : string;
   
   
    // public constructor(){
        
    // }

    public constructor( drinkName :string,quantityOfDrink:number, noOfCupsRequired:number,costOfOneCup:number ,concentrationRequired:string){
        this.drinkName=drinkName;
        this.quantityOfDrink=quantityOfDrink;
        this.noOfCupsRequired=noOfCupsRequired;
        this.concentrationRequired=concentrationRequired;

    }

    public getDrinkName():string{
        return this.drinkName;
    }
    public setDrinkName(drinkName:string):void{
        this.drinkName=drinkName;
    }

    public getQuantityOfDrink():number{
        return this.quantityOfDrink;
    }
    public setQuantityOfDrink(quantityOfDrink:number):void{
        this.quantityOfDrink=quantityOfDrink;
    }
    public getNoOfCupsRequired():number{
        return this.noOfCupsRequired;
    }
    public setNoOfCupsRequired(noOfCupsRequired:number):void{
        this.noOfCupsRequired=noOfCupsRequired;
    }
    public getCostOfOneCup(){
        return this.costOfOneCup;
    }
    public setCostOfOneCup(costOfOneCup:number):void{
        this.costOfOneCup=costOfOneCup;
    }
    public getConcentrationRequired():string{
        return this.concentrationRequired;
    }
    public setConcentrationRequired(concentrationRequired:string):void{
        this.concentrationRequired=concentrationRequired;
    }
    public findBill():number{
        let obj:VendingMachiene;
        let bill :number = obj.getNoOfCupsRequired()*obj.getCostOfOneCup();
        let total:number =  bill-(bill/10)
        return total;
    }

    // let bill= (obj.getNoOfCupsRequired(),obj.getCostOfOneCup())

}