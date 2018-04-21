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

const toWats = {
    HP: (x) => {return x * 745.7},
    KW: (x) => {return x * 1000}
};
const watsTo = {
    HP: (x) => {return x * 0.00134102},
    BirdPower: (x) => {return x * 65},
    KangarooPower: (x) => {return x * 50}
};



document.addEventListener('DOMContentLoaded',function() {
    secondaryInput.onchange = changeEventSecondary;
    secondaryOption.onchange = changeEventSecondary;
    primaryInput.onchange = changeEventPrimary;
    primaryOption.onchange = changeEventPrimary;


},false);



function changeEventSecondary(e) {    
    let x = secondaryInput.value;
    let current = secondaryOption.value;
    let target = primaryOption.value;
    let output = primaryInput;
 
    //Conver x to watts
    switch (current) {
        case "Watt":
            x = x;
        break;

        case "Horsepower":
            x = toWats.HP(x);
        break;
    }

    switch (target) {
        case "Watt":
        x = x;
        break;

        case "Horsepower":
        x = watsTo.HP(x);
    }
    x = round(x, 4);
    primaryInput.value = x;
    //convert x to target value
}


function changeEventPrimary(e) {    
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
            x = toWats.HP(x);
        break;
    }

    switch (target) {
        case "Watt":
        x = x;
        break;

        case "Horsepower":
        x = watsTo.HP(x);
    }
    x = round(x, 4);
    secondaryInput.value = x;
    //convert x to target value
}



function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}