// Alternative Metrics
// :) ========== (:
// Converts all values to watts, then each 'power' has it's watt->this.power conversion within it.
// 1 watt/s = 1 watt/s
// watts/s

// 1 hp = 745.7 watt/s
// horsepower

//1  KangarooPower = 50 Watt/s
//Kangaroo hopping

// 1 BirdPower = 65Watt/s
// BirdOutput

// http://ib.oregonstate.edu/~warrickd/dialetal97.pdf
// http://ib.oregonstate.edu/~warrickd/dialetal97.pdf

//
//
//
const primaryInput = document.getElementById('firstValue');
const secondaryInput = document.getElementById('secondValue');
const primaryOption = document.getElementById('primaryOption')
const secondaryOption = document.getElementById('secondaryOption')

const toWatts = {
    HP: (x) => {return x * 745.7},
    KW: (x) => {return x * 1000},
    KangarooPower: (x) => {return x * 50},
    BirdPower: (x) => {return x * 25},

};
const wattsTo = {
    HP: (x) => {return x * 0.00134102},
    KW: (x) => {return x / 1000},
    BirdPower: (x) => {return x / 25},
    KangarooPower: (x) => {return x / 50}

};



document.addEventListener('DOMContentLoaded',function() {
    secondaryInput.onchange = changeEvent;
    secondaryOption.onchange =  changeEvent;
    primaryInput.onchange = changeEvent;
    primaryOption.onchange = changeEvent;


},false);


function changeEvent(e) {    
    let x = primaryInput.value;
    let current = primaryOption.value;
    let target = secondaryOption.value;
    let output = secondaryInput;
 
    //Conver x to watts
    switch (current) {
        case "Watt":
            x = x;
        break;

        case "Horsepower":
            x = toWatts.HP(x);
        break;

        case "Kangaroopower":
            x = toWatts.KangarooPower(x);
        break;

        case "Birdpower":
            x=toWatts.BirdPower(x);
        break;
    }

    switch (target) {
        case "Watt":
            x = x;
        break;

        case "Horsepower":
            x = wattsTo.HP(x);
        break;

        case "Kangaroopower":
            x = wattsTo.KangarooPower(x);
        break;
        case "Birdpower":
            x=wattsTo.BirdPower(x);
        break;

    }
    x = round(x, 4);
    secondaryInput.value = x;
    //convert x to target value
}



function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}