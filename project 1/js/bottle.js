var bottle1={ bottleId : "1", bottleName : "Kinley",  bottleType : "plastic",  bottlePrice : 20 }
var bottle2={ bottleId : "2", bottleName : "milton",  bottleType : "metal",  bottlePrice : 180 }
var bottle3={ bottleId : "3", bottleName : "bislari",  bottleType : "plastic",  bottlePrice : 180 }
var bottleArray =[ bottle1, bottle2,bottle3 ]

clipTerminals();

function clipTerminals() {
    var str = "";
    for (let i = 0; i < bottleArray.length; i++) {
        str += bottleArray[i].bottleName.charAt(0) + bottleArray[i].bottleName.charAt(bottleArray[i].bottleName.length - 1) + "\n ";
    }
    console.log(str);
}
