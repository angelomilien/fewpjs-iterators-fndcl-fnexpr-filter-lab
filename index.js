// Code your solution here
function findMatching(driverList, driverName) {
    return driverList.filter((foundDriver) =>
        foundDriver.toLowerCase() === driverName.toLowerCase()
    )
}

function fuzzyMatch(driversList, name) {
    return driversList.filter(foundDriver =>
        foundDriver.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
}

function matchName(driversList, name) {
    return driversList.filter(record => record.name === name)
}