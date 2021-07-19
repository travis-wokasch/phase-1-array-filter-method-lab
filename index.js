//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// Code your solution here
//function that takes array of drivers names and string arguments
//returns matching list of drivers
//case sensitive

function findMatching(drivers, name){
    let matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return matchingDrivers
}

//function takes an array of drivers names and a string as an argument
//queries tha array and returns all drivers who begin with the provided letters

function fuzzyMatch(drivers, letters){
    const letterArray = letters.split('')
    const countLetters = letterArray.length
    let firstLetter = drivers.filter(driver => driver.split('', countLetters).join('') === letters)
    return firstLetter
}

//function takes an array of driver objects and a string as arguments
//each driver object has two properties: name and hometown
//should return each element whose name property matches provided string argument

function matchName(drivers, name){
    //takes drivers name
    //returns drivers entire output
    const result = drivers.filter(driver => driver.name === name)
    return result
}

