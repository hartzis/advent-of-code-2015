import data from './data.js';

function getUpOrDown(char) {
  let val;
  if (char.match(/\(/g)) {
    val = 1;
  } else if (char.match(/\)/g)) {
    val = -1;
  } else {
    val = 0;
  }
  return val;
}

export function main(dataToProcess) {
  let floor = 0;
  for (let i = 0; i < dataToProcess.length; i++) {
    floor += getUpOrDown(dataToProcess[i]);
  }
  return floor;
}

export function second(dataToProcess) {
  let floor = 0;
  let firstCharToTakeSantaIntoTheScaryBasement = null;
  for (let i = 0; i < dataToProcess.length; i++) {
    floor += getUpOrDown(dataToProcess[i]);
    if (floor <= -1) {
      firstCharToTakeSantaIntoTheScaryBasement = i + 1;
      break;
    }
  }
  return firstCharToTakeSantaIntoTheScaryBasement
    ? firstCharToTakeSantaIntoTheScaryBasement
    : 0;
}

export default { one: main(data), two: second(data) };
