const convertToCelsius = function(tempF) {
  let newCel = ((tempF - 32) * 5/9)
  newCel = Math.round(newCel * 10) / 10
  return newCel
};

const convertToFahrenheit = function(tempC) {
  let newFah = (tempC * 1.8) + 32
  newFah = Math.round(newFah * 10) / 10
  return newFah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
