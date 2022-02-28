// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {

    return (drivers.slice(0, 2))

}

const returnLastTwoDrivers = (drivers) => {
    return (drivers.slice(2, 4))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return function (fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoOrLastTwo) {
    return returnFirstTwoOrLastTwo(arrayOfDrivers)
}