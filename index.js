// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

 function returnLastTwoDrivers(array){
     return array.slice(array.length-2)
    }

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function(multiplier){
       return  fare*multiplier}   
}

function fareDoubler(fare){
    return fare*2
}

function fareTripler(fare){
   return fare*3
}

function selectDifferentDrivers(drivers,fctn){
    return fctn(drivers)
}

