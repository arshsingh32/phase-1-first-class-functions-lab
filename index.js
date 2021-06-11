// Code your solution in this file!
 function returnFirstTwoDrivers(name){
     const rav = name[0];
     const ar = name[1];
     return [rav, ar];
}

function returnLastTwoDrivers(name){
    return name.slice (2,4);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers)

const createFareMultiplier = integer => function(integer) { return integer * integer };

function fareDoubler(num){
    return num *2;
}

function fareTripler(num){
    return num *3;
}
const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);