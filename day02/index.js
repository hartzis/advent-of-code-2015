import fs from 'fs';

const data = fs.readFileSync('./day02/input.txt').toString();

export function getDimensions(dimensions) {
  const sD = dimensions.split('x');
  return { l: parseInt(sD[0], 10), w: parseInt(sD[1], 10), h: parseInt(sD[2], 10) };
}

export function getPaperSize({ l, w, h }) {
  const s1 = l * w;
  const s2 = w * h;
  const s3 = h * l;
  const sides = [s1, s2, s3];
  const smallestSide = sides.reduce((smallest, side)=>{
    return side <= smallest ? side : smallest;
  }, s1);
  return smallestSide + sides.reduce((total, side)=>(total + (2 * side)), 0);
}

export function getTotalPaperSizeFromDimensions(dimensions) {
  return getPaperSize(getDimensions(dimensions));
}

function main(allDimensions) {
  const splitDimensions = allDimensions.split('\n');
  return splitDimensions.reduce((totalWrapping, dimensions)=>{
    return dimensions ? totalWrapping + getTotalPaperSizeFromDimensions(dimensions) : totalWrapping;
  }, 0);
}

export default { one: main(data), two: '?' };
