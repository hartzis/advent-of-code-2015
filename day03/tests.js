import test from 'tape';
import {
  getNewPosition,
  getTotalHouses,
 } from './index';

test('day 03 getNewPosition', (t)=> {
  t.plan(4);

  let n = getNewPosition({ x: 0, y: 0 }, 'v');
  t.deepEqual(n, { x: 0, y: -1 });

  n = getNewPosition({ x: 0, y: 0 }, '^');
  t.deepEqual(n, { x: 0, y: 1 });

  n = getNewPosition({ x: 0, y: 0 }, '<');
  t.deepEqual(n, { x: -1, y: 0 });

  n = getNewPosition({ x: 0, y: 0 }, '>');
  t.deepEqual(n, { x: 1, y: 0 });
});

test('day 03 total houses count', (t)=> {
  t.plan(5);

  let n = getTotalHouses('>');
  t.equal(n, 2);

  n = getTotalHouses('^>v<');
  t.equal(n, 4);

  n = getTotalHouses('^v><');
  t.equal(n, 3);

  n = getTotalHouses('^v^v^v^v^v');
  t.equal(n, 2);

  n = getTotalHouses('^v^v^v^v^v><<<');
  t.equal(n, 5);
});
