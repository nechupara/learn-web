// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius')),
  };

  console.table(measurment);
  const kelvin = measurment.value + 273;
  return kelvin;
};
console.log(measureKelvin());
