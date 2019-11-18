// Code your solution in this file.
function lowerCaseDrivers(drivers)
{
    return drivers.map( driverName => driverName.toLowerCase());
}

function nameToAttributes(drivers)
{
    return drivers.map( function(driverName) { return {firstName: driverName.split(" ")[0], lastName:  driverName.split(" ")[1]}});
}

function attributesToPhrase(drivers)
{
    return drivers.map( function(driverObject) { return driverObject["name"] + " is from " + driverObject["hometown"] } ) ;
}