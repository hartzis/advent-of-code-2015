import fs from 'fs';

const data = fs.readFileSync('./day03/input.txt').toString();

export function getNewPosition(currentPos, newDir) {
  let xCopy = currentPos.x;
  let yCopy = currentPos.y;
  switch (newDir) {
    case '^':
      yCopy++;
      break;
    case 'v':
      yCopy--;
      break;
    case '<':
      xCopy--;
      break;
    case '>':
      xCopy++;
      break;
    default:
      break;
  }
  return { x: xCopy, y: yCopy };
}

export function getAllHousePositions(directions) {
  let housesPositions = { '0x0': 1 };
  let currentPos = { x: 0, y: 0 };
  directions.forEach((dir)=>{
    currentPos = getNewPosition(currentPos, dir);
    const currentPosString = `${currentPos.x}x${currentPos.y}`;
    if (housesPositions[currentPosString]) {
      housesPositions[currentPosString]++;
    } else {
      housesPositions[currentPosString] = 1;
    }
  });
  return housesPositions;
}

export function getTotalHouses(allDirections) {
  return Object.keys(getAllHousePositions(allDirections.split(''))).length;
}

export default { one: getTotalHouses(data), two: '?' };
