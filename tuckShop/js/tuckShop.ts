import { VendingMachiene} from './vendingMachiene'
 export class TuckShop{
    private machieneName: string;
    private machieneId:number;
    private powerType:string;
    private vendingMachiene: VendingMachiene{};

    public constructor(machieneName:string , machieneId:number , powerType:string , vendingMachiene: {} ){
        this.machieneName =machieneName;
        this.machieneId =machieneId;
        this.powerType =powerType;
        this.vendingMachiene =vendingMachiene;

    }
    
    setMachieneName(machieneName:string):void{
        this.machieneName=machieneName;
    }
    setMachieneId(machieneId:number):void{
        this.machieneId=machieneId;
    }
    setPowerType(powerType:string):void{
        this.powerType=powerType;
    }
    setVendingMachiene(vendingMachiene:VendingMachiene):void{
        this.vendingMachiene=vendingMachiene;
    }


    getMachieneName():string{
        return this.machieneName;
    }
    getMachieneId():number{
        return this.machieneId;
    }
    getPowerType():string{
        return this.powerType;
    }
    getVendingMachiene():VendingMachiene{
        return this.vendingMachiene;
    }
}