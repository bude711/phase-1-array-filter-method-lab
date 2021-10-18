// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase () === name.toLowerCase())
} 
    
function fuzzyMatch (drivers, asdf) {
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase().indexOf(asdf.toLowerCase()) === 0 )
}

function matchName(drivers, driverName) {
    return drivers.filter(record => record.name === driverName)
}