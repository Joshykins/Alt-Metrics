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
const WatsTo = {
    HP: (x) => {return x * 0.00134102},
    BirdPower: (x) => {return x * 65},
    KangarooPower: (x) => {return x * 50}
};

function CalculateToDom(){
    secondaryInput.value = WatsTo.HP(primaryInput.value)
}
