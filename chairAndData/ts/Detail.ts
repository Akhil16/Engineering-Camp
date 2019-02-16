import chairInstance = require('./chair');
class Main{
    manufacturer:[
        {
            chairId : 1,
            chairCompany :"Nilkamal",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        },
        {
            chairId : 2,
            chairCompany :"company2",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        },
        {
            chairId : 3,
            chairCompany :"company3",
            noOfWheels : 4,
            isMovable: true,
            purpose : ["studying","Sitting","racing"],
        },
        {
            chairId : 4,
            chairCompany :"toyota",
            noOfWheels : 6,
            isMovable: true,
            purpose : ["studying","Sitting","racing"],
        },
        {
            chairId : 5,
            chairCompany :"company5",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        },
        {
            chairId : 6,
            chairCompany :"company^",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        },
        {
            chairId : 7,
            chairCompany :"company7",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        },
        {
            chairId : 8,
            chairCompany :"Comp8",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        },
        {
            chairId : 9,
            chairCompany :"Compn9",
            noOfWheels : 3,
            isMovable: true,
            purpose : ["studying","Sitting","racing"],
        },
        {
            chairId : 0,
            chairCompany :"com10",
            noOfWheels : 0,
            isMovable: false,
            purpose : ["studying","Sitting"],
        }
    ];

    manufacturer.forEach(element => {
         new chairInstance.Chair(manufacturer[Element])     
    });

    // chairInstance.manufacturer[0].chairId


    // public function sortByNoOfWheels(manufacturer:chairInstance.Chair[]): chairInstance.Chair[] {
        let manufacturerSorted :chairInstance.Chair[] =manufacturer.sort(function (obj0, obj1) {
            return obj1.getNoOfWheel() -obj0.getNoOfWheel();
        });
        return manufacturerSorted;
    // }

    console.table(manufacturerSorted);
}