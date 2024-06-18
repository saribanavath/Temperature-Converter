function convertTemperature(event) {
  event.preventDefault();
  const inputDegree = parseFloat(document.getElementById('inputDegree').value);
  const inputType = document.getElementById('selectInputDegreeType').value;
  const outputType = document.getElementById('selectConversionType').value;

  let convertedDegree;

  // Convert input degree to Celsius first
  let degreeInCelsius;
  if (inputType === 'C') {
    degreeInCelsius = inputDegree;
  } else if (inputType === 'F') {
    degreeInCelsius = (inputDegree - 32) * 5 / 9;
  } else if (inputType === 'K') {
    degreeInCelsius = inputDegree - 273.15;
  }

  // Convert from Celsius to desired output type
  if (outputType === 'C') {
    convertedDegree = degreeInCelsius;
  } else if (outputType === 'F') {
    convertedDegree = (degreeInCelsius * 9 / 5) + 32;
  } else if (outputType === 'K') {
    convertedDegree = degreeInCelsius + 273.15;
  }

  // Update the result display
  document.getElementById('convertedDegree').innerText = convertedDegree.toFixed(2);
  document.getElementById('convertedUnit').innerText = outputType;
}
