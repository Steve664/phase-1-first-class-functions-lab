// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array){
    return array.slice(array.length-2,array.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
       return (fare*multiplier);
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverSelected) {
return driverSelected(drivers);
}