
function findMatching(drivers, name) {
    return drivers.filter(function(driverString) {
      return driverString.toLowerCase() === name.toLowerCase();
    })
  }

function fuzzyMatch(drivers, nameAbv) {
  return drivers.filter(function(driverName) { 
      return driverName.slice(0, 2) === nameAbv
  })
}

function matchName(drivers, input) {
  return drivers.filter(function(nameMatch) {
    if (input === nameMatch.name) {
      return nameMatch;
    }
  })
}


// command foraward slash
  