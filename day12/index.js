// --- Day 12: JSAbacusFramework.io ---
//
// Santa's Accounting-Elves need help balancing the books after a recent order. Unfortunately, their accounting software uses a peculiar storage format. That's where you come in.
//
// They have a JSON document which contains a variety of things: arrays ([1,2,3]), objects ({"a":1, "b":2}), numbers, and strings. Your first job is to simply find all of the numbers throughout the document and add them together.
//
// For example:
//
// [1,2,3] and {"a":2,"b":4} both have a sum of 6.
// [[[3]]] and {"a":{"b":4},"c":-1} both have a sum of 3.
// {"a":[-1,1]} and [-1,{"a":1}] both have a sum of 0.
// [] and {} both have a sum of 0.
// You will not encounter any strings containing numbers.
//
// What is the sum of all numbers in the document?

import fs from 'fs';

const data = fs.readFileSync('./day12/input.txt').toString();

function getType(thing) {
  if (Array.isArray(thing)) {
    return 'array';
  } else if (typeof thing === 'string') {
    return 'string';
  } else if (typeof thing === 'number') {
    return 'number';
  } else if (typeof thing === 'object') {
    return 'object';
  }
  console.log('whooaaa now elves!');
  return 'crazy elves';
}

function checkForRedValue(obj) {
  return Object.keys(obj).reduce((acc, key) => acc || obj[key] === 'red', false);
}

export function getTotal(item, noRed) {
  switch (getType(item)) {
    case 'array':
      return item.reduce((acc, thing) => acc + getTotal(thing, noRed), 0);
    case 'object':
      if (noRed) {
        if (checkForRedValue(item)) {
          return 0;
        }
      }
      return Object.keys(item).reduce((acc, key) => acc + getTotal(item[key], noRed), 0);
    case 'string':
      return isNaN(parseInt(item, 10)) ? 0 : parseInt(item, 10);
    case 'number':
      return item;
    default:
      console.log('crazy elves!');
  }
}

export function getTotalNoRedObj(item) {
  return getTotal(item, true);
}

export default { one: getTotal(JSON.parse(data)), two: getTotalNoRedObj(JSON.parse(data)) };
