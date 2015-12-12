import data from './data.js';

export function main(dataToProcess) {
  const closings = dataToProcess.match(/\)/g);
  const openings = dataToProcess.match(/\(/g);
  const countClosings = closings ? -closings.length : 0;
  const countOpenings = openings ? openings.length : 0;
  return countOpenings + countClosings;
}

export default { one: main(data), two: 'nothing' };
