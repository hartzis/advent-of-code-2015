import fs from 'fs';

const data = fs.readFileSync('./day09/input.txt').toString();

// borrowed from http://stackoverflow.com/questions/9960908/permutations-in-javascript
function permutator(inputArr) {
  const results = [];
  function permute(arr, memo = []) {
    let cur;
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}

export function getDestinations(destsAndDists) {
  const destinations = new Set();
  for (let i = 0; i < destsAndDists.length; i++) {
    const keys = [...destsAndDists[i].keys()];
    for (let j = 0; j < 2; j++) {
      if (!destinations.has(destsAndDists[i].get(keys[j]))) {
        destinations.add(destsAndDists[i].get(keys[j]));
      }
    }
  }
  return destinations;
}

export function getDestAndDists(dests) {
  const trimmedDests = dests.split(' ').join('');
  const [places, dist] = trimmedDests.split('=');
  const [p1, p2] = places.split('to');
  return new Map([[p1, p1], [p2, p2], ['dist', parseInt(dist, 10)]]);
}

export function getDistance(d1, d2, destsAndDists) {
  for (let ddIdx = 0; ddIdx < destsAndDists.length; ddIdx++) {
    if (destsAndDists[ddIdx].has(d1) && destsAndDists[ddIdx].has(d2)) {
      return destsAndDists[ddIdx].get('dist');
    }
  }
  return 0;
}

function getIdxGroupsForLength(length) {
  const groups = [];
  for (let i = 0; i < length; i++) {
    groups.push([i, i + 1]);
  }
  return groups;
}

function generateAllDistances(arrayOfDestsAndDistStrings) {
  // get all the dests and distances
  const destsAndDists = arrayOfDestsAndDistStrings.filter((a) => !!a).map(getDestAndDists);
  // get all the destinations
  const destinations = getDestinations(destsAndDists);
  const groupIndexes = getIdxGroupsForLength(destinations.size);
  // create all the permutations
  const perms = permutator(Array.from(destinations));
  // for each permutation add up the distances
  const allTotalDistances = [];
  for (let permIdx = 0; permIdx < perms.length; permIdx++) {
    let permTotalDist = 0;
    for (let groupIdx = 0; groupIdx < groupIndexes.length; groupIdx++) {
      const d1 = perms[permIdx][groupIndexes[groupIdx][0]];
      const d2 = perms[permIdx][groupIndexes[groupIdx][1]];
      permTotalDist = permTotalDist + getDistance(d1, d2, destsAndDists);
    }
    allTotalDistances.push(permTotalDist);
  }
  return allTotalDistances;
}

function getSmallestNumber(distances) {
  return distances.sort((a, b) => a - b)[0];
}

function getLargestNumber(distances) {
  return distances.sort((a, b) => a - b)[distances.length - 1];
}

export function getShortestDistance(arrayOfDestsAndDistStrings) {
  return getSmallestNumber(generateAllDistances(arrayOfDestsAndDistStrings));
}

function getLongestDistance(arrayOfDestsAndDistStrings) {
  return getLargestNumber(generateAllDistances(arrayOfDestsAndDistStrings));
}

function calculate(input, day) {
  const arrayOfDestsAndDistStrings = input.split('\n');
  return day === 1 ? getShortestDistance(arrayOfDestsAndDistStrings) : getLongestDistance(arrayOfDestsAndDistStrings);
}

export default { one: calculate(data, 1), two: calculate(data, 2) };
