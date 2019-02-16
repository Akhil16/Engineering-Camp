export class Chair{
    private chairId :number;
    private chairCompany :string;
    private noOfWheels : number;
    private isMovable: boolean;
    private purpose : string;

    // constructor(){
    //   console.log("default con is used")  ;
    // }
   
    constructor(chairId :number, chairCompany :string, noOfWheels : number, isMovable :boolean, purpose:string ) {
        this.chairId=chairId;
        this.chairCompany=chairCompany;
        this.noOfWheels=noOfWheels;
        this.isMovable=isMovable;
        this.purpose=purpose;
    }

    public getChairId():number{
        return this.chairId;
    }
    public getChairCompany():string{
        return this.chairCompany;        
    }
    public getNoOfWheel():number{
        return this.noOfWheels;
    }
    public getIsMOvable():boolean{
        return this.isMovable;
    }
    public getPurpose():string{
        return this.purpose;
    }
}